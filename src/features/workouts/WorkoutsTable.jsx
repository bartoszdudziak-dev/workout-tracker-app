import WorkoutsTableOperations from './WorkoutsTableOperations';
import Table from '../../ui/Table';
import WorkoutRow from './WorkoutRow';
import Spinner from '../../ui/Spinner';

import { useState } from 'react';
import { useWorkouts } from './useWorkouts';
import SortByOrder from '../../ui/SortByOrder';

function WorkoutsTable() {
  const [curOpen, setCurOpen] = useState(null);
  const { workoutsData, isLoading } = useWorkouts();

  if (isLoading) return <Spinner />;

  if (!workoutsData.length) return null;

  return (
    <>
      <WorkoutsTableOperations />
      <Table columns='grid-cols-[0.2fr_1fr_0.5fr_0.3fr_0.2fr] md:grid-cols-[0.2fr_1fr_0.5fr_0.3fr_0.5fr]'>
        <Table.Header>
          <div>
            <SortByOrder />
          </div>
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
    </>
  );
}

export default WorkoutsTable;
