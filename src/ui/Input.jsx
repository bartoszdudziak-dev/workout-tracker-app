function Input({
  size = 'medium',
  disabled = false,
  defaultValue = '',
  id,
  name,
  register,
  ...props
}) {
  const inputSize = {
    medium: 'px-4 py-1 md:px-6 text-sm md:text-base',
    large: 'px-2 py-0.5 md:px-3 text-xs sm:text-sm',
  };

  return (
    <input
      className={`w-full rounded border border-tetiary bg-secondary font-semibold tracking-wider text-primary shadow-inner outline-none transition-all duration-200 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-accent-primary disabled:cursor-not-allowed disabled:opacity-50 md:border-2 ${inputSize[size]}`}
      id={id}
      autoComplete='off'
      disabled={disabled}
      defaultValue={defaultValue}
      {...register(name)}
      {...props}
    />
  );
}

export default Input;
