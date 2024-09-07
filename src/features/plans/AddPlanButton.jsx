import { TbPlus } from 'react-icons/tb';

function AddPlanButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex aspect-square items-center justify-center overflow-clip rounded-md bg-light-tetiary p-3 leading-3 text-accent-secondary shadow-lg transition-all duration-300 hover:scale-105 xs:p-5 md:rounded-lg'
    >
      <TbPlus className='size-20 xs:size-24 md:size-28' />
    </button>
  );
}

export default AddPlanButton;
