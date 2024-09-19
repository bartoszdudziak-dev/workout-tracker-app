import toast from 'react-hot-toast';
import { signup as signupApi } from '../../services/authenticationApi';

import { useMutation } from '@tanstack/react-query';

export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () =>
      toast.success(
        'Signup completed sucessfully.\nVerify your email address!',
      ),
    onError: (error) => toast.error(error.message),
  });

  return { signup, isLoading };
}
