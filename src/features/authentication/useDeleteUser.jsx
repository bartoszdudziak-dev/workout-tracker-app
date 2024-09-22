import toast from 'react-hot-toast';

import { deleteUser as deleteUserApi } from '../../services/authenticationApi';

import { useMutation } from '@tanstack/react-query';
import { useLogout } from './useLogout';

export function useDeleteUser() {
  const { logout } = useLogout();

  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      logout();
      toast.success('User updated successfully');
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteUser, isDeleting };
}
