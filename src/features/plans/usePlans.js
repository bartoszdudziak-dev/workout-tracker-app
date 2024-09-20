import { getPlans } from '../../services/plansApi';
import { useQuery } from '@tanstack/react-query';

export function usePlans() {
  const {
    data: plans,
    isPending: isLoading,
    error,
  } = useQuery({
    queryFn: getPlans,
    queryKey: ['plans'],
  });

  return { plans, error, isLoading };
}
