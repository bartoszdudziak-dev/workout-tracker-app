import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getWorkoutsAfterDate } from '../../services/workoutsApi';
import { subDays } from 'date-fns';

export function useRecentWorkouts() {
  const [searchParams] = useSearchParams();

  const lastDays = searchParams.get('last')
    ? Number(searchParams.get('last'))
    : 7;

  const date = subDays(new Date(), lastDays).toISOString();

  const { data: { data, count } = {}, isPending: isLoading } = useQuery({
    queryFn: () => getWorkoutsAfterDate(date),
    queryKey: ['workouts', `${lastDays}days`],
  });

  return { data, isLoading, count, lastDays };
}
