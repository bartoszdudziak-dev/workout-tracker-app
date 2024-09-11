function Label({ children, htmlFor, srOnly = false }) {
  return (
    <label
      className={
        srOnly
          ? 'sr-only'
          : 'text-secondary w-fit text-xs font-semibold uppercase tracking-widest lg:text-sm'
      }
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
