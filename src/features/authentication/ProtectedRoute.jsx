import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { useEffect } from 'react';

import LoadingPage from '../../ui/LoadingPage';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  console.log(isAuthenticated);
  // Protect app if user is not authenticated
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/authentication');
    },
    [isLoading, isAuthenticated, navigate],
  );

  if (isLoading) return <LoadingPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
