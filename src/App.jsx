import { LayoutProvider } from './context/LayoutContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { RouterProvider } from 'react-router-dom';

import router from './routes';

function App() {
  return (
    <DarkModeProvider>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </DarkModeProvider>
  );
}

export default App;
