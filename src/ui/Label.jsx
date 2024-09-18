function Label({ children, htmlFor, srOnly = false }) {
  return (
    <label
      className={
        srOnly
          ? 'sr-only'
          : 'w-fit text-xs font-semibold uppercase tracking-wider text-secondary lg:text-sm'
      }
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
