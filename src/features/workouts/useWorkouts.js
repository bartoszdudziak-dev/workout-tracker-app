import { useQuery } from '@tanstack/react-query';
import { getWorkouts } from '../../services/workoutsApi';

export function useWorkouts() {
  const {
    data: workoutsData,
    isPending: isLoading,
    error,
  } = useQuery({
    queryFn: getWorkouts,
    queryKey: ['workouts'],
  });

  return { workoutsData, isLoading, error };
}
