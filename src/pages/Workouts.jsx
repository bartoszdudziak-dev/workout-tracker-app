import ButtonBack from '../ui/ButtonBack';
import PageTitle from '../ui/PageTitle';
import WorkoutsContainer from '../features/workouts/WorkoutsContainer';

function Workouts() {
  return (
    <>
      <ButtonBack />
      <PageTitle title='Workouts' />
      <WorkoutsContainer />
    </>
  );
}

export default Workouts;
