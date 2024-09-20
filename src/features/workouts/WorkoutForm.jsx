import {
  DEFAULT_WORKOUT_EXERCISES,
  DEFAULT_WORKOUT_SETS,
  MIN_INPUT_LENGTH,
} from '../../consts';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { TbPlus } from 'react-icons/tb';

import FormTitle from '../../ui/FormTitle';
import FormRow from '../../ui/FormRow';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import WorkoutExerciseField from './WorkoutExerciseField';

import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';

function WorkoutForm({ session, workout }) {
  const isCreateSession = session === 'create';

  const values = isCreateSession
    ? {
        workoutName: 'New workout',
        workoutDate: new Date(),
        exercises: new Array(DEFAULT_WORKOUT_EXERCISES).fill({
          name: '',
          sets: new Array(DEFAULT_WORKOUT_SETS).fill({ reps: '', weight: '' }),
        }),
      }
    : {
        workoutName: workout.name,
        workoutDate: workout.date,
        exercises: workout.exercises.map((exercise) => {
          return {
            name: exercise.name,
            sets: exercise.sets.map((set) => {
              return { reps: set.reps, weight: set.weight };
            }),
          };
        }),
      };

  const {
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: values,
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
    // ISO STRING NEED TO BE
    const { workoutDate } = data;
    console.log(typeof workoutDate);
    isCreateSession
      ? console.log('create: ', data)
      : console.log('edit: ', data);
  }

  function onError() {
    console.log(errors);
  }

  useEffect(() => setFocus('workoutName'), [setFocus]);

  return (
    <form
      className='mx-auto px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8'
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormTitle
        title={isCreateSession ? 'Create new workout' : 'Edit workout'}
      />

      <div className='space-y-4 sm:space-y-6 lg:space-y-8'>
        <div className='grid grid-cols-[0.6fr_0.4fr] gap-2 sm:grid-cols-[1fr_0.5fr] sm:gap-4'>
          <FormRow>
            <Label htmlFor='workoutName'>Workout name</Label>
            <Input
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
                      disabled={false}
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
        <ButtonIcon icon={<TbPlus />} onClick={handleAddExercise} />

        <Button
          htmlType='submit'
          size='large'
          disabled={Object.keys(errors).length}
        >
          {isCreateSession ? 'Create' : 'Edit'}
        </Button>
      </div>
    </form>
  );
}

export default WorkoutForm;
