function PlanOperationButton({
  text = '',
  icon = '',
  disabled = false,
  onClick = null,
}) {
  return (
    <button
      className='transistion-all text-secondary hover:disabled:text-secondary flex basis-20 items-center justify-between gap-0.5 text-xs font-bold uppercase tracking-widest duration-200 hover:text-accent-primary disabled:cursor-not-allowed disabled:opacity-50 xs:text-sm'
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span> {icon}
    </button>
  );
}

export default PlanOperationButton;
