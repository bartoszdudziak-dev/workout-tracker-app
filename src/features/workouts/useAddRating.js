import toast from 'react-hot-toast';
import { updateRating } from '../../services/workoutsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useAddRating() {
  const queryClient = useQueryClient();

  const { mutate: addRating, isPending: isUpdating } = useMutation({
    mutationFn: updateRating,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success('Rating updated successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { addRating, isUpdating };
}
