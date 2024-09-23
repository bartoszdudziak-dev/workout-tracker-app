import { useQuery } from '@tanstack/react-query';
import { getWorkouts } from '../../services/workoutsApi';
import { useSearchParams } from 'react-router-dom';

export function useWorkouts() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy');
  const sortByColumn = sortBy ? `workout_${sortBy}` : 'workout_date';

  const order = searchParams.get('order');
  const orderColumn = order === 'asc' || '';

  const {
    data: workoutsData,
    isPending: isLoading,
    error,
  } = useQuery({
    queryFn: () => getWorkouts({ sortByColumn, orderColumn }),
    queryKey: ['workouts', sortBy, order],
  });

  return { workoutsData, isLoading, error };
}
