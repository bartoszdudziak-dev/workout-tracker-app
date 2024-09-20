import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPlan } from '../../services/plansApi';

export function usePlan() {
  const { planId } = useParams();

  const {
    data: plan,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getPlan(planId),
    queryKey: ['plan', planId],
    enabled: !!planId,
    retry: false,
  });

  return { plan, isLoading, error };
}
