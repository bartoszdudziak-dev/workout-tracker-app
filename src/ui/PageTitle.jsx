function PageTitle({ title = '' }) {
  return (
    <h2 className='mb-6 text-xl font-bold uppercase tracking-widest text-accent-primary overline sm:text-2xl md:mb-10'>
      {title}
    </h2>
  );
}

export default PageTitle;
