import { createBrowserRouter, Navigate } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';
import Settings from './pages/Settings';
import Account from './pages/Account';
import ProtectedRoute from './features/authentication/ProtectedRoute';

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
      { path: '/dashboard', element: <Home /> },
      { path: '/workouts', element: <Workouts /> },
      { path: '/workouts/new', element: <Workouts /> },
      { path: '/workouts/new/:planId', element: <Workouts /> },
      { path: '/plans', element: <Plans /> },
      { path: '/account', element: <Account /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

export default router;
