import toast from 'react-hot-toast';

import { logout as logoutApi } from '../../services/authenticationApi';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('Logout completed succesfully');
      queryClient.removeQueries();
      navigate('/authentication', { replace: true });
    },
    onError: (error) => toast.error(error.message),
  });

  return { logout, isLoading };
}
