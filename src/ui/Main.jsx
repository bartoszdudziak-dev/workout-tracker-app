function Main({ children }) {
  return (
    <main className='scroll-gutter-stable overflow-y-auto bg-secondary p-4 shadow-inner md:p-6 lg:p-8'>
      {children}
    </main>
  );
}

export default Main;
