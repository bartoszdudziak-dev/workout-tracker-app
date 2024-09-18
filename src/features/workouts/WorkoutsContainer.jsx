import Table from '../../ui/Table';
import WorkoutRow from './WorkoutRow';
import Modal from '../../ui/Modal';
import AddWorkoutButton from './AddWorkoutButton';

import { useState } from 'react';
import { fakeWorkouts } from '../../consts';
import WorkoutForm from './WorkoutForm';
import { useWorkouts } from './useWorkouts';

function WorkoutsContainer() {
  const [curOpen, setCurOpen] = useState(null);
  const { data } = useWorkouts();
  console.log(data);

  return (
    <div className='space-y-4'>
      <Modal>
        <Modal.Open opens='workoutForm'>
          <AddWorkoutButton />
        </Modal.Open>

        <Modal.Window name='workoutForm' size='large'>
          <WorkoutForm session='create' />
        </Modal.Window>

        <Table columns='grid-cols-[0.2fr_1fr_0.5fr_0.3fr_0.2fr] md:grid-cols-[0.2fr_1fr_0.5fr_0.3fr_0.5fr]'>
          <Table.Header>
            <div></div>
            <div>Name</div>
            <div>Date</div>
            <div>Rate</div>
            <div></div>
          </Table.Header>
          <Table.Body
            data={fakeWorkouts}
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
      </Modal>
    </div>
  );
}

export default WorkoutsContainer;
