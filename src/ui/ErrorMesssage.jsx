function ErrorMesssage({ children }) {
  return (
    <span className='text-xs font-semibold tracking-wide text-red-400 lg:text-sm'>
      {children}
    </span>
  );
}

export default ErrorMesssage;
