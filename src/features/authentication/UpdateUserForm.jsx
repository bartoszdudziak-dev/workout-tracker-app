import FormRow from '../../ui/FormRow';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';

import { useUser } from './useUser';
import { useForm } from 'react-hook-form';
import { useUpdateUser } from './useUpdateUser';

function UpdateUserForm() {
  const {
    user: {
      user_metadata: { firstName, lastName, email },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { firstName, lastName } });

  const watchedValues = watch();

  const isDataChanged =
    watchedValues.firstName !== firstName ||
    watchedValues.lastName !== lastName;

  const onSubmit = (data) => updateUser(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-screen-xs'>
      <h3 className='mb-4 text-lg font-semibold uppercase tracking-widest text-primary sm:text-xl md:mb-6'>
        User Details
      </h3>
      <div className='grid grid-cols-1 gap-4'>
        <FormRow>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' defaultValue={email} disabled />
        </FormRow>
        <FormRow>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            disabled={isUpdating}
            id='firstName'
            name='firstName'
            register={register}
            validation={{
              required: 'This field is required',
              validate: (value) => !!value.trim() || 'This field is required',
            }}
            error={errors?.firstName}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            disabled={isUpdating}
            id='lastName'
            name='lastName'
            register={register}
            validation={{
              required: 'This field is required',
              validate: (value) => !!value.trim() || 'This field is required',
            }}
            error={errors?.lastName}
          />
        </FormRow>
      </div>
      <div className='mt-8 flex items-center justify-end gap-4'>
        {isUpdating && <SpinnerMini />}
        <Button
          htmlType='submit'
          size='large'
          disabled={!isDataChanged || isUpdating || Object.keys(errors).length}
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
