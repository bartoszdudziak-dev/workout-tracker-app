import Modal from '../../ui/Modal';
import AddWorkoutButton from './AddWorkoutButton';
import WorkoutForm from './WorkoutForm';
import WorkoutsTable from './WorkoutsTable';

import { useNavigate } from 'react-router-dom';

function WorkoutsContainer() {
  const navigate = useNavigate();

  return (
    <Modal>
      <AddWorkoutButton
        onClick={() => navigate('/workouts/new')}
        opens='workoutCreateForm'
      />

      <WorkoutsTable />

      <Modal.Window name='workoutCreateForm' size='large'>
        <WorkoutForm session='create' />
      </Modal.Window>
    </Modal>
  );
}

export default WorkoutsContainer;
