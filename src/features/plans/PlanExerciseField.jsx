import { MIN_INPUT_LENGTH } from '../../consts';

import { TbArrowDown, TbArrowUp } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';

import ButtonIcon from '../../ui/ButtonIcon';
import Label from '../../ui/Label';
import Input from '../../ui/Input';

function PlanExerciseField({
  exercise,
  index,
  register,
  onDelete,
  onSwapUp,
  onSwapDown,
  exercisesNum,
  errors,
  disabled,
}) {
  return (
    <div className='flex items-center justify-between gap-2'>
      <Label
        htmlFor={exercise.id}
        srOnly={true}
      >{`Exercise ${index + 1}`}</Label>

      <span className='basis-[2rem] text-right text-xs font-bold text-accent-primary sm:text-sm md:text-base'>
        #{index + 1}
      </span>

      <div className='py-2 sm:w-1/2 sm:py-3'>
        <Input
          disabled={disabled}
          id={exercise.id}
          defaultValue={exercise.name}
          name={`exercises.${index}.name`}
          autoComplete='off'
          register={register}
          validation={{
            required: 'This field is required',
            validate: (value) =>
              value.trim().length >= MIN_INPUT_LENGTH ||
              'At least 3 characters required',
          }}
          error={errors?.exercises?.[index]?.name}
        />
      </div>

      <div className='flex gap-0.5 sm:gap-1.5'>
        <ButtonIcon
          disabled={exercisesNum === 1 || disabled}
          type='secondary'
          icon={<TbArrowUp />}
          onClick={() => onSwapUp(index)}
        />
        <ButtonIcon
          disabled={exercisesNum === 1 || disabled}
          type='secondary'
          icon={<TbArrowDown />}
          onClick={() => onSwapDown(index)}
        />
        <ButtonIcon
          disabled={exercisesNum === 1 || disabled}
          type='secondary'
          icon={<RiDeleteBinLine />}
          onClick={() => onDelete(index)}
        />
      </div>
    </div>
  );
}

export default PlanExerciseField;
