import { TbPlus } from 'react-icons/tb';

function AddPlanButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex aspect-square items-center justify-center overflow-clip rounded-md bg-backdrop-secondary p-3 leading-3 text-secondary shadow-lg outline-none transition-all duration-200 hover:scale-105 hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-accent-primary xs:p-5 md:rounded-lg'
    >
      <TbPlus className='size-20 xs:size-24 md:size-28' />
    </button>
  );
}

export default AddPlanButton;
