import { TbPlus } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';

import Label from '../../ui/Label';
import Input from '../../ui/Input';
import ButtonIcon from '../../ui/ButtonIcon';

import { useFieldArray } from 'react-hook-form';
import SpinnerMini from '../../ui/SpinnerMini';

function WorkoutSetsField({
  register,
  control,
  exerciseIndex,
  errors,
  disabled,
  isSearching,
  lastExercise,
}) {
  const {
    fields: sets,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `exercises.${exerciseIndex}.sets`,
  });

  const setsNum = sets.length;
  function handleAddSet() {
    append({ reps: '', weight: '' });
  }

  function handleDeleteSet(index) {
    if (setsNum === 1) return;
    remove(index);
  }

  return (
    <div className='relative ml-6 grid'>
      <div className='grid grid-cols-[0.2fr_0.2fr_0.1fr] place-items-center gap-2 text-xs uppercase text-primary'>
        <Label htmlFor={`${sets.at(0).id}-reps`}>Reps</Label>
        <Label htmlFor={`${sets.at(0).id}-weight`}>Weight</Label>
        <div></div>
      </div>

      <div className='space-y-1'>
        {sets.map((set, index) => (
          <div
            className='relative grid grid-cols-[0.2fr_0.2fr_0.1fr] place-items-center gap-2 md:gap-4'
            key={set.id}
          >
            <Label
              htmlFor={`${set.id}-reps`}
              srOnly={true}
            >{`Reps of set ${index + 1}`}</Label>
            <Input
              disabled={disabled}
              type='number'
              min={1}
              size='small'
              id={`${set.id}-reps`}
              name={`exercises.${exerciseIndex}.sets.${index}.reps`}
              register={register}
              defaultValue={set.reps}
              validation={{
                required: 'This field is required',
                min: { value: 1, message: 'Reps field should be at least 1' },
              }}
              error={errors?.exercises?.[exerciseIndex]?.sets?.[index]?.reps}
            />

            <Label
              htmlFor={`${set.id}-weight`}
              srOnly={true}
            >{`Weight of set ${index + 1}`}</Label>
            <Input
              disabled={disabled}
              type='number'
              step='0.05'
              min={0}
              size='small'
              id={`${set.id}-weight`}
              name={`exercises.${exerciseIndex}.sets.${index}.weight`}
              register={register}
              defaultValue={set.weight}
              validation={{
                required: 'This field is required',
                min: { value: 0, message: 'Weight field should be at least 0' },
              }}
              error={errors?.exercises?.[exerciseIndex]?.sets?.[index]?.weight}
            />

            <ButtonIcon
              disabled={setsNum === 1 || disabled}
              type='secondary'
              icon={<RiDeleteBinLine />}
              onClick={() => handleDeleteSet(index)}
            />
          </div>
        ))}
      </div>

      <div className='absolute bottom-0 right-3'>
        <ButtonIcon
          icon={<TbPlus />}
          type='secondary'
          onClick={handleAddSet}
          disabled={disabled}
        />
      </div>

      {isSearching ? (
        <div className='mt-2'>
          <SpinnerMini />
        </div>
      ) : (
        lastExercise && (
          <div className='mt-2 w-fit max-w-[80%] rounded bg-secondary p-1 text-xs text-secondary'>
            <div>
              <span className=''>Last {lastExercise.exercise_name}</span>
              <div className='flex flex-wrap gap-2'>
                {lastExercise.sets.map((set) => (
                  <div key={set.id}>
                    {set.set.reps} x {set.set.weight}kg
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default WorkoutSetsField;
