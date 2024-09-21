import {
  DEFAULT_WORKOUT_EXERCISES,
  DEFAULT_WORKOUT_SETS,
  MIN_INPUT_LENGTH,
} from '../../consts';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { TbExclamationCircle, TbPlus } from 'react-icons/tb';

import FormTitle from '../../ui/FormTitle';
import FormRow from '../../ui/FormRow';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import WorkoutExerciseField from './WorkoutExerciseField';
import SpinnerMini from '../../ui/SpinnerMini';
import Spinner from '../../ui/Spinner';
import WorkoutRate from './WorkoutRating';

import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useCreateWorkout } from './useCreateWorkout';
import { useUpdateWorkout } from './useUpdateWorkout';
import { usePlan } from '../plans/usePlan';

function WorkoutForm({ session, workout, closeModalWindow }) {
  const { createWorkout, isCreating } = useCreateWorkout();
  const { updateWorkout, isUpdating } = useUpdateWorkout();
  const { plan, isLoading, error: planError } = usePlan();

  const [workoutRate, setWorkoutRate] = useState(workout?.workout_rate || null);

  const isCreateSession = session === 'create';
  const [defaultFormValues, setDefaultFormValues] = useState(() => {
    if (isCreateSession) {
      return {
        workoutName: 'New workout',
        workoutDate: new Date(),
        exercises: new Array(DEFAULT_WORKOUT_EXERCISES).fill({
          name: '',
          sets: new Array(DEFAULT_WORKOUT_SETS).fill({
            reps: '',
            weight: '',
          }),
        }),
      };
    } else {
      return {
        workoutName: workout.workout_name,
        workoutDate: new Date(workout.workout_date),
        exercises: workout.exercises.map((exercise) => {
          return {
            name: exercise.exercise_name,
            sets: exercise.sets.map((set) => set.set),
          };
        }),
      };
    }
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const {
    fields: exercises,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'exercises',
  });

  const exercisesNum = exercises.length;

  function handleAddExercise() {
    append({ name: '', sets: [{ reps: '', weight: '' }] });
  }

  function handleDeleteExercise(index) {
    if (exercisesNum === 1) return;
    remove(index);
  }

  function onSubmit(data) {
    if (isCreateSession)
      createWorkout(
        { ...data, workoutRate },
        { onSuccess: () => closeModalWindow() },
      );
    else {
      updateWorkout({
        id: workout.id,
        workout: data,
        workoutRate,
      });
    }
  }

  useEffect(() => setFocus('workoutName'), [setFocus]);

  useEffect(() => {
    if (plan) {
      const newValues = {
        workoutName: plan.plan_name,
        workoutDate: new Date(),
        exercises: plan.plan_exercises.map((exercise) => {
          return {
            name: exercise.name,
            sets: new Array(DEFAULT_WORKOUT_SETS).fill({
              reps: '',
              weight: '',
            }),
          };
        }),
      };
      setDefaultFormValues(newValues);
      reset(newValues);
    }
  }, [isLoading, plan, reset]);

  if (isLoading)
    return (
      <div className='flex h-[50dvh] items-center justify-center'>
        <Spinner />
      </div>
    );

  if (!isLoading && planError)
    return (
      <div className='flex h-[500px] items-center justify-center gap-4 text-lg uppercase tracking-wide text-primary md:text-2xl'>
        <span className='text-xl md:text-4xl'>
          <TbExclamationCircle />
        </span>
        <span>Plan not found</span>
      </div>
    );

  return (
    <form
      className='mx-auto px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex items-center gap-4'>
        <FormTitle
          title={isCreateSession ? 'Create new workout' : 'Edit workout'}
        />
        {(isCreating || isUpdating) && <SpinnerMini />}
      </div>
      <div className='space-y-4 sm:space-y-6 lg:space-y-8'>
        <div className='grid grid-cols-[0.6fr_0.4fr] gap-2 sm:grid-cols-[1fr_0.5fr] sm:gap-4'>
          <FormRow>
            <Label htmlFor='workoutName'>Workout name</Label>
            <Input
              disabled={isCreating || isUpdating}
              id='workoutName'
              register={register}
              name={`workoutName`}
              size='large'
              validation={{
                required: 'This field is required',
                validate: (value) =>
                  value.trim().length >= MIN_INPUT_LENGTH ||
                  'At least 3 characters required',
              }}
              error={errors?.workoutName}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='workoutDate'>Date</Label>
            <div>
              <Controller
                control={control}
                name='workoutDate'
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <DatePicker
                      disabled={isCreating || isUpdating}
                      autoComplete='off'
                      value={field.value}
                      inputRef={field.ref}
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      id='workoutDate'
                      className={`${error ? 'border-red-400 focus-visible:ring-red-400' : 'border-tetiary focus-visible:ring-accent-primary'} w-full rounded border bg-secondary px-4 py-1.5 text-center text-sm font-semibold tracking-wider text-primary shadow-inner outline-none transition-all duration-200 focus-visible:border-transparent focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 md:border-2 md:px-6 md:text-base lg:text-lg`}
                    />
                  );
                }}
              ></Controller>
            </div>
          </FormRow>
        </div>

        <div className='scroll-gutter-stable max-h-[65dvh] divide-y-2 divide-accent-primary overflow-y-auto rounded border border-tetiary px-2 shadow-inner xs:max-h-[55dvh] md:max-h-[45dvh]'>
          {exercises.map((exercise, index) => (
            <WorkoutExerciseField
              disabled={isCreating || isUpdating}
              key={exercise.id}
              exercise={exercise}
              index={index}
              register={register}
              control={control}
              exercisesNum={exercisesNum}
              onDelete={handleDeleteExercise}
              errors={errors}
            />
          ))}
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between sm:mt-5 md:mt-6'>
        <ButtonIcon
          icon={<TbPlus />}
          onClick={handleAddExercise}
          disabled={isCreating || isUpdating}
        />

        <WorkoutRate
          initialRate={workoutRate}
          onRate={setWorkoutRate}
          disabled={isCreating || isUpdating}
        />

        <Button
          htmlType='submit'
          size='large'
          disabled={isCreating || isUpdating || Object.keys(errors).length}
        >
          {isCreateSession ? 'Create' : 'Edit'}
        </Button>
      </div>
    </form>
  );
}

export default WorkoutForm;
