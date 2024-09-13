function PlanOperationButton({
  text = '',
  icon = '',
  disabled = false,
  onClick = null,
}) {
  return (
    <button
      className='transistion-all flex basis-20 items-center justify-between gap-0.5 rounded-sm p-0.5 text-xs font-bold uppercase tracking-widest text-secondary outline-none duration-200 hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-accent-primary disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:text-secondary xs:text-sm'
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span> {icon}
    </button>
  );
}

export default PlanOperationButton;
