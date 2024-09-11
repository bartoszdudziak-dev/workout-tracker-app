import Table from '../../ui/Table';
import WorkoutRow from './WorkoutRow';

import { useState } from 'react';

import { fakeWorkouts } from '../../consts';

function WorkoutsContainer() {
  const [curOpen, setCurOpen] = useState(null);

  return (
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
  );
}

export default WorkoutsContainer;
