import toast from 'react-hot-toast';
import { updateWorkout as updateWorkoutApi } from '../../services/workoutsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateWorkout() {
  const queryClient = useQueryClient();

  const { mutate: updateWorkout, isPending: isUpdating } = useMutation({
    mutationFn: updateWorkoutApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success('Workout updated successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateWorkout, isUpdating };
}
