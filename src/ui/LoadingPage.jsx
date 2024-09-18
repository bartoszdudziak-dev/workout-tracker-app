import Spinner from './Spinner';

function LoadingPage() {
  return (
    <div className='flex h-dvh w-full items-center justify-center bg-primary'>
      <Spinner />
    </div>
  );
}

export default LoadingPage;
