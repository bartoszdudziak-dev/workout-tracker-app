import Button from '../../ui/Button';
import ErrorMesssage from '../../ui/ErrorMesssage';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import SpinnerMini from '../../ui/SpinnerMini';

import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';

function SignupForm({ showLoginForm }) {
  const { signup, isLoading } = useSignup();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password, firstName, lastName }) {
    signup(
      { email, password, firstName, lastName },
      { onSuccess: () => showLoginForm() },
    );
  }

  return (
    <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-5'>
        <div className='grid grid-cols-2 gap-4'>
          <FormRow>
            <Label htmlFor='firstName'>First name</Label>
            <Input
              disabled={isLoading}
              id='firstName'
              name='firstName'
              autocomplete='given-name'
              register={register}
              validation={{
                required: 'This field is required',
                validate: (value) => !!value.trim() || 'This field is required',
              }}
              error={errors?.firstName}
            />
            {errors?.firstName?.message && (
              <ErrorMesssage>{errors.firstName.message}</ErrorMesssage>
            )}
          </FormRow>

          <FormRow>
            <Label htmlFor='lastName'>Last name</Label>
            <Input
              disabled={isLoading}
              id='lastName'
              name='lastName'
              autocomplete='family-name'
              register={register}
              validation={{
                required: 'This field is required',
                validate: (value) => !!value.trim() || 'This field is required',
              }}
              error={errors?.lastName}
            />
            {errors?.lastName?.message && (
              <ErrorMesssage>{errors.lastName.message}</ErrorMesssage>
            )}
          </FormRow>
        </div>

        <FormRow>
          <Label htmlFor='email'>Email</Label>
          <Input
            disabled={isLoading}
            type='email'
            id='email'
            name='email'
            autocomplete='email'
            register={register}
            validation={{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email',
              },
            }}
            error={errors?.email}
          />
          {errors?.email?.message && (
            <ErrorMesssage>{errors.email.message}</ErrorMesssage>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor='password'>Password</Label>
          <Input
            disabled={isLoading}
            type='password'
            id='password'
            name='password'
            autocomplete='new-password'
            register={register}
            validation={{
              required: 'This field is required',
              validate: (value) => !!value.trim() || 'This field is required',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters',
              },
            }}
            error={errors?.password}
          />
          {errors?.password?.message && (
            <ErrorMesssage>{errors.password.message}</ErrorMesssage>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor='passwordConfirm'>Confrim password</Label>
          <Input
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            autocomplete='new-password'
            register={register}
            validation={{
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match',
            }}
            error={errors?.passwordConfirm}
          />
          {errors?.passwordConfirm?.message && (
            <ErrorMesssage>{errors.passwordConfirm.message}</ErrorMesssage>
          )}
        </FormRow>
      </div>

      <div className='flex items-center justify-between'>
        <Button
          disabled={isLoading}
          size='large'
          htmlType='submit'
          type='primary'
        >
          Signup
        </Button>
        {isLoading && <SpinnerMini />}
      </div>
    </form>
  );
}

export default SignupForm;
