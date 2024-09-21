import Table from '../../ui/Table';
import WorkoutRow from './WorkoutRow';
import Modal from '../../ui/Modal';
import AddWorkoutButton from './AddWorkoutButton';
import Spinner from '../../ui/Spinner';
import WorkoutForm from './WorkoutForm';

import { useState } from 'react';
import { useWorkouts } from './useWorkouts';
import { useNavigate } from 'react-router-dom';

function WorkoutsContainer() {
  const [curOpen, setCurOpen] = useState(null);
  const { workoutsData, isLoading } = useWorkouts();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  return (
    <div className='space-y-4'>
      <Modal>
        <AddWorkoutButton
          onClick={() => navigate('/workouts/new')}
          opens='workoutCreateForm'
        />

        <Modal.Window name='workoutCreateForm' size='large'>
          <WorkoutForm session='create' />
        </Modal.Window>

        {workoutsData.length > 0 && (
          <Table columns='grid-cols-[0.2fr_1fr_0.5fr_0.3fr_0.2fr] md:grid-cols-[0.2fr_1fr_0.5fr_0.3fr_0.5fr]'>
            <Table.Header>
              <div></div>
              <div>Name</div>
              <div>Date</div>
              <div>Rate</div>
              <div></div>
            </Table.Header>
            <Table.Body
              data={workoutsData}
              render={(workout) => (
                <WorkoutRow
                  key={workout.id}
                  workout={workout}
                  onOpen={setCurOpen}
                  curOpen={curOpen}
                />
              )}
            />
          </Table>
        )}
      </Modal>
    </div>
  );
}

export default WorkoutsContainer;
