import PageTitle from '../../ui/PageTitle';
import DarkModeToggle from '../../ui/DarkModeToggle';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Button from '../../ui/Button';

import { useEffect, useState } from 'react';
import { useUser } from './useUser';
import { useNavigate } from 'react-router-dom';

function AuthenticationContainer() {
  const [isLogin, setIsLogin] = useState(true);
  const { data: user } = useUser();
  const navigate = useNavigate();

  // Prevent from going to the authentication page if user is already logged
  useEffect(() => {
    if (user) navigate('/dashboard', { replace: true });
  }, [user, navigate]);

  const showLoginForm = () => setIsLogin(true);
  const showSignupForm = () => setIsLogin(false);

  return (
    <div className='relative flex h-dvh items-center justify-center overflow-hidden overflow-y-auto bg-secondary text-primary'>
      <div className='absolute right-5 top-5'>
        <DarkModeToggle />
      </div>

      <div className='mx-4 flex w-full max-w-screen-xs flex-col rounded-md border border-tetiary bg-primary p-9 shadow-lg md:p-12'>
        <div className='mb-6 flex justify-between'>
          <PageTitle title={isLogin ? 'Login form' : 'Signup Form'} />
          <div className='flex flex-col gap-2'>
            <Button
              type={isLogin ? 'primary' : 'secondary'}
              onClick={showLoginForm}
            >
              Login
            </Button>
            <Button
              type={isLogin ? 'secondary' : 'primary'}
              onClick={showSignupForm}
            >
              Signup
            </Button>
          </div>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm showLoginForm={showLoginForm} />}
      </div>
    </div>
  );
}

export default AuthenticationContainer;
