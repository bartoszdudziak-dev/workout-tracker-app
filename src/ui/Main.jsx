function Main({ children }) {
  return (
    <main className='overflow-y-auto bg-light-secondary p-5 shadow-inner sm:p-8 md:p-10'>
      {children}
    </main>
  );
}

export default Main;
