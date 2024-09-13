function Button({
  htmlType = 'button',
  type = 'primary',
  size = 'medium',
  disabled = false,
  onClick = null,
  children,
}) {
  const buttonSize = {
    medium: 'px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm',
    large: 'px-2.5 py-1.5 text-sm md:px-4 md:py-2 md:text-base',
  };

  const buttonType = {
    primary: 'bg-accent-primary text-tetiary',
    secondary: 'bg-tetiary text-accent-primary',
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`focus-visible:ring-offset-offsetColor rounded font-semibold uppercase tracking-widest shadow-md outline-none transition-all duration-200 hover:scale-105 hover:opacity-85 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:transition-none hover:disabled:scale-100 hover:disabled:opacity-50 ${buttonSize[size]} ${buttonType[type]}`}
      type={htmlType}
    >
      {children}
    </button>
  );
}

export default Button;
