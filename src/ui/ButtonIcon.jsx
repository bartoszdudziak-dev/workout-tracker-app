function ButtonIcon({ icon, onClick, size }) {
  const type = {
    medium: 'text-xl sm:text-2xl lg:text-3xl',
    large: 'text-2xl xs:text-3xl sm:text-3xl md:text-4xl',
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-light-secondary transition-all duration-200 hover:scale-105 hover:text-accent-secondary ${type[size]}`}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
