function ButtonIcon({
  htmlType = 'button',
  type = 'primary',
  size = 'medium',
  disabled = false,
  onClick = null,
  icon = '',
}) {
  const buttonSize = {
    medium: 'text-xl sm:text-2xl lg:text-3xl',
    large: 'text-2xl xs:text-3xl sm:text-3xl lg:text-4xl',
  };

  const buttonType = {
    primary:
      'focus:outline-primary bg-accent-primary p-1 text-tetiary hover:opacity-85 focus:outline-4 focus:outline-offset-4 disabled:opacity-50 hover:disabled:opacity-50',
    secondary:
      'text-secondary disabled:text-tetiary disabled:hover:text-tetiary p-0.5 hover:text-accent-primary focus:outline-4 focus:outline-offset-2 focus:outline-accent-primary',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
      className={`flex items-center justify-center rounded transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:transition-none hover:disabled:scale-100 ${buttonSize[size]} ${buttonType[type]}`}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
