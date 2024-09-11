import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';
import Settings from './pages/Settings';
import Account from './pages/Account';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/workouts', element: <Workouts /> },
      { path: '/workouts/new/:id', element: <Workouts /> },
      { path: '/plans', element: <Plans /> },
      { path: '/account', element: <Account /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

export default router;
