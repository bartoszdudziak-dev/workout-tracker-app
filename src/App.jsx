import { RouterProvider } from 'react-router-dom';
import { LayoutProvider } from './context/LayoutContext';

import router from './routes';

function App() {
  return (
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  );
}

export default App;
