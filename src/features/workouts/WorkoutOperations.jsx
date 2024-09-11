import { TbCopyPlus, TbEdit } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';

import ButtonIcon from '../../ui/ButtonIcon';

function WorkoutOperations() {
  return (
    <div className='flex flex-col gap-0.5 md:flex-row md:gap-1 lg:gap-2'>
      <ButtonIcon icon={<TbEdit />} type='secondary'>
        Edit
      </ButtonIcon>
      <ButtonIcon icon={<TbCopyPlus />} type='secondary'>
        Copy
      </ButtonIcon>
      <ButtonIcon icon={<RiDeleteBinLine />} type='secondary'>
        Delete
      </ButtonIcon>
    </div>
  );
}

export default WorkoutOperations;
