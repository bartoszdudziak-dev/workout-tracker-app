function Main({ children }) {
  return (
    <main className='scroll-gutter-stable bg-secondary overflow-y-auto p-4 shadow-inner md:p-6'>
      {children}
    </main>
  );
}

export default Main;
