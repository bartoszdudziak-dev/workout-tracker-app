import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import Table from '../../ui/Table';
import ButtonIcon from '../../ui/ButtonIcon';
import WorkoutOperations from './WorkoutOperations';
import WorkoutDetails from './WorkoutDetails';
import WorkoutForm from './WorkoutForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal';

function WorkoutRow({ workout, onOpen, curOpen }) {
  const { id, name, exercises, date } = workout;
  const isOpen = id === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : id);
  }

  return (
    <Modal>
      <div className='relative'>
        <Table.Row>
          <div>
            <ButtonIcon
              type='secondary'
              icon={isOpen ? <MdExpandLess /> : <MdExpandMore />}
              onClick={handleToggle}
            />
          </div>
          <div
            className={`line-clamp-3 break-all ${isOpen ? 'font-bold text-accent-primary' : 'font-semibold'}`}
          >
            {name}
          </div>
          <div className='font-semibold text-secondary'>{date}</div>
          <div className='text-base sm:text-xl md:text-2xl'>😁</div>
          <WorkoutOperations isOpen={isOpen} />
        </Table.Row>
        <WorkoutDetails exercises={exercises} isOpen={isOpen} />
      </div>

      <Modal.Window name='delete'>
        <ConfirmDelete resource='workout' details={name} />
      </Modal.Window>

      <Modal.Window size='large' name='workoutForm'>
        <WorkoutForm session='edit' workout={workout} />
      </Modal.Window>
    </Modal>
  );
}

export default WorkoutRow;
