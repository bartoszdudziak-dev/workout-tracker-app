import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getWorkouts } from '../../services/workoutsApi';
import { useSearchParams } from 'react-router-dom';

export function useWorkouts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy');
  const sortByColumn = sortBy ? `workout_${sortBy}` : 'workout_date';

  const order = searchParams.get('order');
  const orderColumn = order === 'asc' || '' ? 'asc' : 'desc';

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const {
    data: { data: workoutsData, count } = {},
    isPending: isLoading,
    error,
  } = useQuery({
    queryFn: () => getWorkouts({ sortByColumn, orderColumn, page }),
    queryKey: ['workouts', sortByColumn, orderColumn, page],
    retry: false,
  });

  // Pre-fetching
  const totalPages = Math.ceil(
    count / Number(import.meta.env.VITE_WORKOUTS_PER_PAGE),
  );

  if (page < totalPages)
    queryClient.prefetchQuery({
      queryFn: () => getWorkouts({ sortByColumn, orderColumn, page: page + 1 }),
      queryKey: ['workouts', sortByColumn, orderColumn, page + 1],
      retry: false,
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryFn: () => getWorkouts({ sortByColumn, orderColumn, page: page - 1 }),
      queryKey: ['workouts', sortByColumn, orderColumn, page - 1],
      retry: false,
    });

  return { workoutsData, isLoading, error, count };
}
