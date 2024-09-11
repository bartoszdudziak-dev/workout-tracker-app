import { TbPlus } from 'react-icons/tb';

function AddPlanButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='bg-backdrop-secondary text-secondary flex aspect-square items-center justify-center overflow-clip rounded-md p-3 leading-3 shadow-lg transition-all duration-200 hover:scale-105 hover:text-accent-primary focus:outline-4 focus:outline-offset-4 focus:outline-accent-primary xs:p-5 md:rounded-lg'
    >
      <TbPlus className='size-20 xs:size-24 md:size-28' />
    </button>
  );
}

export default AddPlanButton;
