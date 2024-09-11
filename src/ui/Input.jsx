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
      className={`w-full rounded border font-semibold tracking-wider shadow-inner transition-all duration-200 focus:outline-4 focus:outline-offset-2 focus:outline-accent-primary disabled:cursor-not-allowed disabled:opacity-50 md:border-2 ${inputSize[size]}`}
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
