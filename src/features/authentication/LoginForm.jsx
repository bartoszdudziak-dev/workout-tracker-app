import Button from '../../ui/Button';
import ErrorMesssage from '../../ui/ErrorMesssage';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import SpinnerMini from '../../ui/SpinnerMini';

import { useForm } from 'react-hook-form';
import { useLogin } from './useLogin';

function LoginForm() {
  const { login, isLoading } = useLogin();

  const handleLoginGuest = () => {
    login({
      email: import.meta.env.VITE_GUEST_EMAIL,
      password: import.meta.env.VITE_GUEST_PASSWORD,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  return (
    <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-5'>
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
            autocomplete='current-password'
            register={register}
            validation={{
              required: 'This field is required',
            }}
            error={errors?.password}
          />
          {errors?.password?.message && (
            <ErrorMesssage>{errors.password.message}</ErrorMesssage>
          )}
        </FormRow>
      </div>

      <div className='flex items-center justify-between'>
        <div className='space-y-2'>
          <Button
            disabled={isLoading}
            size='large'
            htmlType='submit'
            type='primary'
          >
            Login
          </Button>
          <Button
            disabled={isLoading}
            size='large'
            type='secondary'
            onClick={handleLoginGuest}
          >
            Guest Account
          </Button>
        </div>
        {isLoading && <SpinnerMini />}
      </div>
    </form>
  );
}

export default LoginForm;
