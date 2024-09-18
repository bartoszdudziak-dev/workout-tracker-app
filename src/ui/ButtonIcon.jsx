function ButtonIcon({
  htmlType = 'button',
  type = 'primary',
  size = 'medium',
  disabled = false,
  onClick = null,
  icon = '',
  ...props
}) {
  const buttonSize = {
    medium: 'text-xl sm:text-2xl lg:text-3xl',
    large: 'text-2xl xs:text-3xl sm:text-3xl lg:text-4xl',
    xl: 'text-5xl',
  };

  const buttonType = {
    primary:
      'bg-accent-primary p-1 text-tetiary hover:opacity-85 disabled:opacity-50 hover:disabled:opacity-50 focus-visible:ring-offset-offsetColor focus-visible:ring-offset-4',
    secondary:
      'text-secondary disabled:text-tetiary disabled:hover:text-tetiary p-0.5 hover:text-accent-primary ',
  };

  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
      className={`flex items-center justify-center rounded outline-none transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-primary active:scale-90 disabled:cursor-not-allowed disabled:transition-none hover:disabled:scale-100 ${buttonSize[size]} ${buttonType[type]}`}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
