import LastDaysControl from './LastDaysControl';
import { useRecentWorkouts } from './useRecentWorkouts';
import Spinner from '../../ui/Spinner';

function WorkoutsAmount() {
  const { count, isLoading, lastDays } = useRecentWorkouts();

  return (
    <div className='mx-auto mt-10 max-w-screen-xs rounded-md bg-primary p-4 shadow-md md:mx-0 md:mt-16 md:max-w-fit md:p-8'>
      <LastDaysControl />

      <div className='flex flex-col items-center gap-2'>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <span className='mb-2 mt-6 text-7xl font-semibold text-accent-primary'>
              {count}
            </span>
            <span className='text-xs uppercase tracking-wider text-secondary'>
              workouts in last {lastDays} days
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default WorkoutsAmount;
