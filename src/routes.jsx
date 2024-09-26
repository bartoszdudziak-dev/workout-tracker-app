import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import AppLayout from './ui/AppLayout';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import PageNotFound from './ui/PageNotFound';

const Authentication = lazy(() => import('./pages/Authentication'));
const Workouts = lazy(() => import('./pages/Workouts'));
const Plans = lazy(() => import('./pages/Plans'));
const Account = lazy(() => import('./pages/Account'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

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
