import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createWorkout as createWorkoutApi } from '../../services/workoutsApi';
import toast from 'react-hot-toast';

export function useCreateWorkout() {
  const queryClient = useQueryClient();

  const { mutate: createWorkout, isPending: isCreating } = useMutation({
    mutationFn: createWorkoutApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success('Workout created successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { createWorkout, isCreating };
}
