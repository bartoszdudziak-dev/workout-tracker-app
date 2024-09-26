import { createBrowserRouter, Navigate } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Authentication from './pages/Authentication';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';
import Account from './pages/Account';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import PageNotFound from './ui/PageNotFound';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/authentication' /> },
  {
    path: '/authentication',
    element: <Authentication />,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/workouts', element: <Workouts /> },
      { path: '/workouts/new', element: <Workouts /> },
      { path: '/workouts/new/:planId', element: <Workouts /> },
      { path: '/plans', element: <Plans /> },
      { path: '/account', element: <Account /> },
    ],
  },
  { path: '*', element: <PageNotFound /> },
]);

export default router;
