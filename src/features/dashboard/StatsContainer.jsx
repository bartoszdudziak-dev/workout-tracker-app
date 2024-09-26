import { useLayout } from '../../context/LayoutContext';
import ExerciseProgress from './ExerciseProgress';
import WorkoutsPerPeriod from './WorkoutsPerPeriod';

function StatsContainer() {
  const { isNavOpen } = useLayout();

  return (
    <div
      className={`mx-auto mt-10 flex flex-col items-start gap-10 xl:flex-row ${!isNavOpen && 'lg:flex-row'}`}
    >
      <WorkoutsPerPeriod />
      <ExerciseProgress />
    </div>
  );
}

export default StatsContainer;
