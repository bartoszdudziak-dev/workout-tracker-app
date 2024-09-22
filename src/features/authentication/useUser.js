import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/authenticationApi';

export function useUser() {
  const {
    data: user,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: false,
    // To prevent from closing current opend modal on window focus change
    refetchOnWindowFocus: false,
  });

  const isAuthenticated = user?.role === 'authenticated';

  return { user, error, isLoading, isAuthenticated };
}
