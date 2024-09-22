import toast from 'react-hot-toast';

import { login as loginApi } from '../../services/authenticationApi';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      navigate('/dashboard', { replace: true });
      toast.success('Login completed successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { login, isLoading };
}
