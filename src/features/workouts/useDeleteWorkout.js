import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkout as deleteWorkoutApi } from '../../services/workoutsApi';
import toast from 'react-hot-toast';

export function useDeleteWorkout() {
  const queryClient = useQueryClient();

  const { mutate: deleteWorkout, isPending: isDeleting } = useMutation({
    mutationFn: deleteWorkoutApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['workouts'],
      });
      toast.success('Workout deleted successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteWorkout, isDeleting };
}
