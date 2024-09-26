import Button from './Button';

import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex h-dvh items-center justify-center bg-primary p-16 text-primary'>
      <div className='flex flex-col'>
        <h1 className='mb-8 text-2xl md:text-4xl lg:text-5xl'>
          Page could not be found!
        </h1>
        <Button type='secondary' size='large' onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
