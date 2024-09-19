import toast from 'react-hot-toast';
import { updatePlan as updatePlanApi } from '../../services/plansApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdatePlan() {
  const queryClient = useQueryClient();

  const { mutate: updatePlan, isPending: isUpdating } = useMutation({
    mutationFn: updatePlanApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['plans'] });
      toast.success('Plan updated successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { updatePlan, isUpdating };
}
