import { DEFAULT_PLAN_EXERCISES, MIN_INPUT_LENGTH } from '../../consts';

import { TbPlus } from 'react-icons/tb';

import FormTitle from '../../ui/FormTitle';
import Label from '../../ui/Label';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import PlanExerciseField from './PlanExerciseField';

import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useCreatePlan } from './useCreatePlan';

function PlanForm({ session, plan, closeModalWindow }) {
  const isCreateSession = session === 'create';
  const values = isCreateSession
    ? {
        planName: 'New Plan',
        exercises: new Array(DEFAULT_PLAN_EXERCISES).fill({ name: '' }),
      }
    : {
        planName: plan.name,
        exercises: plan.exercises.map((exercise) => {
          return { name: exercise };
        }),
      };

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });

  const {
    fields: exercises,
    append,
    remove,
    swap,
    move,
  } = useFieldArray({
    control,
    name: 'exercises',
  });

  const exercisesNum = exercises.length;

  const { createPlan, isCreating } = useCreatePlan();
  const isEditing = false;

  function handleClearForm() {
    exercises.forEach((_, index) => setValue(`exercises.${index}.name`, ''));
    setFocus(`exercises.${0}.name`);
  }

  function handleDeleteExercise(index) {
    if (exercisesNum === 1) return;
    remove(index);
  }

  function handleAddExercise() {
    append({ name: '' });
  }

  function handleSwapUp(index) {
    if (index === 0) {
      move(index, exercisesNum - 1);
      setFocus(`exercises.${exercisesNum - 1}.name`);
    } else {
      swap(index, index - 1);
      setFocus(`exercises.${index - 1}.name`);
    }
  }

  function handleSwapDown(index) {
    if (index === exercisesNum - 1) {
      move(index, 0);
      setFocus(`exercises.${0}.name`);
    } else {
      swap(index, index + 1);
      setFocus(`exercises.${index + 1}.name`);
    }
  }

  function onSubmit({ planName, exercises }) {
    if (isCreateSession)
      createPlan(
        { planName, exercises },
        { onSuccess: () => closeModalWindow() },
      );
  }

  useEffect(() => setFocus('planName'), [setFocus]);

  return (
    <form
      className='mx-auto p-6 sm:p-8 md:p-12'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormTitle title={isCreateSession ? 'Create new plan' : 'Edit plan'} />

      <div className='space-y-4 sm:space-y-6 md:space-y-8'>
        <div className='sm:w-3/5'>
          <FormRow>
            <Label htmlFor='planName'>Plan Name</Label>
            <Input
              disabled={isCreating || isEditing}
              id='planName'
              name='planName'
              size='large'
              register={register}
              validation={{
                required: 'This field is required',
                validate: (value) =>
                  value.trim().length >= MIN_INPUT_LENGTH ||
                  'At least 3 characters required',
              }}
              error={errors?.planName}
            />
          </FormRow>
        </div>

        <FormRow>
          <div>
            <Label htmlFor={exercises.at(0).id}>
              Exercises{' '}
              <span className='font-bold text-accent-primary md:text-base'>
                ({exercisesNum})
              </span>
            </Label>
          </div>

          <div className='scroll-gutter-stable max-h-[50dvh] divide-y divide-tetiary overflow-y-auto overflow-x-clip rounded border border-tetiary px-2 py-1 shadow-inner sm:max-h-[45dvh] sm:px-4 sm:py-1.5 md:max-h-[35vh]'>
            {exercises.map((exercise, index) => (
              <PlanExerciseField
                disabled={isCreating || isEditing}
                key={exercise.id}
                exercise={exercise}
                index={index}
                register={register}
                onDelete={handleDeleteExercise}
                onSwapUp={handleSwapUp}
                onSwapDown={handleSwapDown}
                exercisesNum={exercisesNum}
                errors={errors}
              />
            ))}
          </div>
        </FormRow>
      </div>

      <div className='mt-6 flex items-center justify-between sm:mt-8 md:mt-10'>
        <ButtonIcon
          disabled={isCreating || isEditing}
          icon={<TbPlus />}
          onClick={handleAddExercise}
        />

        <div className='space-x-4 sm:space-x-6 md:space-x-8'>
          <Button
            disabled={isCreating || isEditing}
            type='secondary'
            size='large'
            onClick={handleClearForm}
          >
            Clear
          </Button>

          <Button
            disabled={isCreating || isEditing || Object.keys(errors).length}
            htmlType='submit'
            size='large'
          >
            {isCreateSession ? 'Create' : 'Edit'}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PlanForm;
