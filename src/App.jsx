import { Toaster } from 'react-hot-toast';

import router from './routes';
import { LayoutProvider } from './context/LayoutContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import LoadingPage from './ui/LoadingPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DarkModeProvider>
        <LayoutProvider>
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </LayoutProvider>
        <Toaster
          toastOptions={{
            className: 'bg-secondary text-primary font-semibold px-4 rounded',
            duration: 5000,
          }}
        />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
