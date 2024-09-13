import { DEFAULT_PLAN_INPUTS_NUM } from '../../consts';

import { TbArrowDown, TbArrowUp, TbPlus } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';

import FormTitle from '../../ui/FormTitle';
import Label from '../../ui/Label';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';

function PlanForm({ session, plan }) {
  const isCreateSession = session === 'create';

  const values = isCreateSession
    ? {
        planName: '',
        exercises: new Array(DEFAULT_PLAN_INPUTS_NUM).fill({ name: '' }),
      }
    : {
        planName: plan.planName,
        exercises: plan.exercises.map((exercise) => {
          return { name: exercise };
        }),
      };

  const { control, register, handleSubmit, setValue, setFocus } = useForm({
    defaultValues: values,
  });

  const { fields, append, remove, swap, move } = useFieldArray({
    control,
    name: 'exercises',
  });

  const exercisesNum = fields.length;

  function handleClear() {
    fields.forEach((_, index) => setValue(`exercises.${index}.name`, ''));
    setFocus(`exercises.${0}.name`);
  }

  function handleRemove(index) {
    if (exercisesNum === 1) return;
    remove(index);
  }

  function handleAdd() {
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

  function onSubmit(data) {
    isCreateSession
      ? console.log('create: ', data)
      : console.log('edit: ', data);
  }

  useEffect(() => setFocus('planName'), []);

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
            <Input id='planName' name='planName' register={register} />
          </FormRow>
        </div>

        <FormRow>
          <div>
            <Label htmlFor={fields.at(0).id}>
              Exercises{' '}
              <span className='font-bold text-accent-primary md:text-base'>
                ({exercisesNum})
              </span>
            </Label>
          </div>

          <div className='scroll-gutter-stable max-h-[50dvh] divide-y divide-tetiary overflow-y-auto overflow-x-clip rounded border border-tetiary px-2 py-1 shadow-inner sm:max-h-[45dvh] sm:px-4 sm:py-1.5 md:max-h-[35vh]'>
            {fields.map((field, index) => {
              return (
                <div
                  className='flex items-center justify-between gap-2'
                  key={field.id}
                >
                  <Label
                    htmlFor={field.id}
                    srOnly={true}
                  >{`Exercise ${index + 1}`}</Label>

                  <span className='basis-[2rem] text-right text-xs font-bold text-accent-primary sm:text-sm md:text-base'>
                    #{index + 1}
                  </span>

                  <div className='py-2 sm:w-1/2 sm:py-3'>
                    <Input
                      size='large'
                      id={field.id}
                      defaultValue={field.name}
                      register={register}
                      name={`exercises.${index}.name`}
                      autoComplete='off'
                    />
                  </div>

                  <div className='flex gap-0.5 sm:gap-1.5'>
                    <ButtonIcon
                      disabled={exercisesNum === 1}
                      type='secondary'
                      icon={<TbArrowUp />}
                      onClick={() => handleSwapUp(index)}
                    />
                    <ButtonIcon
                      disabled={exercisesNum === 1}
                      type='secondary'
                      icon={<TbArrowDown />}
                      onClick={() => handleSwapDown(index)}
                    />
                    <ButtonIcon
                      disabled={exercisesNum === 1}
                      type='secondary'
                      icon={<RiDeleteBinLine />}
                      onClick={() => handleRemove(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </FormRow>
      </div>

      <div className='mt-6 flex items-center justify-between sm:mt-8 md:mt-10'>
        <ButtonIcon icon={<TbPlus />} onClick={handleAdd} />

        <div className='space-x-4 sm:space-x-6 md:space-x-8'>
          <Button type='secondary' size='large' onClick={handleClear}>
            Clear
          </Button>

          <Button htmlType='submit' size='large'>
            {isCreateSession ? 'Create' : 'Edit'}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PlanForm;
