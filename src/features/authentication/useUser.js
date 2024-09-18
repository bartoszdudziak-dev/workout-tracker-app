import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/authenticationApi';

export function useUser() {
  const {
    data,
    error,
    isPending: isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: false,
    // To prevent from closing current opend modal on window focus change
    refetchOnWindowFocus: false,
  });

  const isAuthenticated = data?.user?.role === 'authenticated';

  return { data, error, isLoading, isFetching, isAuthenticated };
}
