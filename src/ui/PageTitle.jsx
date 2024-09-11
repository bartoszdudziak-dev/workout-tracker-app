import ButtonBack from './ButtonBack';

function PageTitle({ title = '' }) {
  return (
    <div className='mb-6 space-y-1 md:mb-10'>
      <ButtonBack />
      <h2 className='text-xl font-bold uppercase tracking-widest text-accent-primary overline sm:text-2xl'>
        {title}
      </h2>
    </div>
  );
}

export default PageTitle;
