import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

function Input({
  type = 'text',
  size = 'medium',
  disabled = false,
  defaultValue = '',
  id,
  name,
  register,
  validation = '',
  error = '',
  autocomplete = 'off',
  ...props
}) {
  const inputSize = {
    small: 'px-1 py-0.5 md:px-3 text-xs text-center',
    medium: 'px-2 py-1 md:px-4 text-xs sm:text-sm lg:text-base ',
    large: 'px-4 py-1.5 md:px-6 text-sm md:text-base lg:text-lg',
  };

  return (
    <>
      <div className='relative w-full'>
        <input
          type={type}
          className={`w-full rounded ${error ? 'border-red-400 focus-visible:ring-red-400' : 'border-tetiary focus-visible:ring-accent-primary'} border bg-secondary font-semibold tracking-wider text-primary shadow-inner outline-none transition-all duration-200 focus-visible:border-transparent focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 md:border-2 ${inputSize[size]}`}
          id={id}
          autoComplete={autocomplete}
          disabled={disabled}
          defaultValue={defaultValue}
          {...register(name, validation)}
          {...props}
        />
        {error && size !== 'small' && (
          <span className='absolute right-4 top-1/2 -translate-y-1/2 text-red-400 md:text-xl'>
            <IoIosCloseCircle />
          </span>
        )}
      </div>
    </>
  );
}

export default Input;
