import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPlan as createPlanApi } from '../../services/plansApi';
import toast from 'react-hot-toast';

export function useCreatePlan() {
  const queryClient = useQueryClient();

  const { mutate: createPlan, isPending: isCreating } = useMutation({
    mutationFn: createPlanApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['plans'],
      });
      toast.success('Plan successfully created');
    },
    onError: (error) => toast.error(error.message),
  });

  return { createPlan, isCreating };
}
