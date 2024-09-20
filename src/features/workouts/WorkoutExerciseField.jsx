import { RiDeleteBinLine } from 'react-icons/ri';

import FormRow from '../../ui/FormRow';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import ButtonIcon from '../../ui/ButtonIcon';
import WorkoutSetsField from './WorkoutSetsField';

import { MIN_INPUT_LENGTH } from '../../consts';

function WorkoutExerciseField({
  exercise,
  index,
  register,
  control,
  exercisesNum,
  onDelete,
  errors,
  disabled,
}) {
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
            disabled={disabled}
            id={exercise.id}
            register={register}
            defaultValue=''
            name={`exercises.${index}.name`}
            validation={{
              required: 'This field is required',
              validate: (value) =>
                value.trim().length >= MIN_INPUT_LENGTH ||
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
        />
      </FormRow>
    </div>
  );
}

export default WorkoutExerciseField;
