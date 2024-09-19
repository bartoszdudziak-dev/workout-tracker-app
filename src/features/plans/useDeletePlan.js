import toast from 'react-hot-toast';
import { deletePlan as deletePlanApi } from '../../services/plansApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeletePlan() {
  const queryClient = useQueryClient();

  const { mutate: deletePlan, isPending: isDeleting } = useMutation({
    mutationFn: deletePlanApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['plans'],
      });
      toast.success('Plan deleted successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { deletePlan, isDeleting };
}
