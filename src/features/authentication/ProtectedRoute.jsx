import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { useEffect } from 'react';

import LoadingPage from '../../ui/LoadingPage';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isFetching } = useUser();
  const navigate = useNavigate();

  // Protect app if user is not authenticated
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && !isFetching)
        navigate('/authentication');
    },
    [isLoading, isFetching, isAuthenticated, navigate],
  );

  if (isLoading || isFetching) return <LoadingPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
