import { RiDeleteBinLine } from 'react-icons/ri';

import FormRow from '../../ui/FormRow';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import ButtonIcon from '../../ui/ButtonIcon';
import WorkoutSetsField from './WorkoutSetsField';
import { useSearchExercisesByName } from './useSearchExercisesByName';
import { useCallback, useEffect } from 'react';

function WorkoutExerciseField({
  exercise,
  index,
  register,
  control,
  exercisesNum,
  onDelete,
  errors,
  disabled,
  getValues,
}) {
  const {
    data: lastExercise,
    setQuery,
    isSearching,
  } = useSearchExercisesByName({ limit: 1 });

  const handleSearchLastExercise = (e) => setQuery(e.target.value);

  const setQueryCallback = useCallback(() => {
    setQuery(getValues().exercises[index].name);
  }, [setQuery, getValues, index]);

  useEffect(() => {
    if (getValues().exercises[index].name)
      setQueryCallback(getValues().exercises[index].name);
  }, [getValues, index, setQueryCallback]);

  return (
    <div className='relative grid gap-4 py-4 md:py-6'>
      <FormRow>
        <Label
          htmlFor={exercise.id}
          srOnly={true}
        >{`Exercise #${index + 1}`}</Label>
        <div className='flex items-center justify-between gap-2 md:w-3/4'>
          <span className='text-xs font-bold text-accent-primary sm:text-sm md:text-base'>{`#${index + 1}`}</span>
          <Input
            onChange={handleSearchLastExercise}
            disabled={disabled}
            id={exercise.id}
            register={register}
            defaultValue=''
            name={`exercises.${index}.name`}
            validation={{
              required: 'This field is required',
              validate: (value) =>
                value.trim().length >=
                  Number(import.meta.env.VITE_MIN_INPUT_LENGTH) ||
                'At least 3 characters required',
            }}
            error={errors?.exercises?.[index]?.name}
          />
          <ButtonIcon
            disabled={exercisesNum === 1 || disabled}
            icon={<RiDeleteBinLine />}
            onClick={() => onDelete(index)}
          />
        </div>
      </FormRow>
      <FormRow>
        <WorkoutSetsField
          exerciseIndex={index}
          register={register}
          control={control}
          errors={errors}
          disabled={disabled}
          lastExercise={lastExercise}
          isSearching={isSearching}
        />
      </FormRow>
    </div>
  );
}

export default WorkoutExerciseField;
