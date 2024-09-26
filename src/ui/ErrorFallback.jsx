import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='flex h-dvh items-center justify-center bg-primary p-16 text-primary'>
      <div className='flex flex-col'>
        <h1 className='mb-8 text-2xl md:text-4xl lg:text-5xl'>
          Something went wrong!
        </h1>
        <p>{error.message}</p>
        <Button type='secondary' size='large' onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
