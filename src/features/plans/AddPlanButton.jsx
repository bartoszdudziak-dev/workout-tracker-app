import { IoAdd } from 'react-icons/io5';

function AddPlanButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='xs:p-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-light-tetiary p-3 leading-3 text-accent-secondary shadow-lg transition-all duration-300 hover:scale-105 md:rounded-lg'
    >
      <IoAdd className='xs:size-24 size-20 md:size-28' />
    </button>
  );
}

export default AddPlanButton;
