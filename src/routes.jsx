import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';
import Settings from './pages/Settings';
import TestComponent from './features/workouts/TestComponent';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/workouts', element: <Workouts /> },
      { path: '/workouts/new', element: <TestComponent /> },
      { path: '/plans', element: <Plans /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

export default router;
