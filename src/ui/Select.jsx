function Select({ onChange, options, value }) {
  return (
    <select
      onChange={onChange}
      name='sort'
      value={value}
      className='cursor-pointer rounded bg-tetiary px-2 py-1 text-xs font-semibold uppercase text-accent-primary shadow-md outline-none transition-all duration-300 hover:scale-105 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-4 focus-visible:ring-offset-offsetColor md:px-3 md:py-1.5 md:text-sm'
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
