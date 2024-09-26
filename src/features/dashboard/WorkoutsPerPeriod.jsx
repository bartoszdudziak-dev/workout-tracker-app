import LastDaysControl from './LastDaysControl';
import Spinner from '../../ui/Spinner';

import { useRecentWorkouts } from './useRecentWorkouts';

function WorkoutsPerPeriod() {
  const { count, isLoading, days } = useRecentWorkouts();

  return (
    <div className='mx-auto w-full max-w-screen-xs rounded-md bg-primary p-4 shadow-md md:p-8 xl:max-w-fit'>
      <LastDaysControl />

      <div className='flex flex-col items-center gap-2'>
        {isLoading ? (
          <Spinner margin='m-8 md:m-4' />
        ) : (
          <>
            <span className='mb-2 mt-6 text-7xl font-semibold text-accent-primary'>
              {count}
            </span>
            <span className='text-xs uppercase tracking-wider text-secondary'>
              workouts in last {days} days
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default WorkoutsPerPeriod;
