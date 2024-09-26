import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';

createRoot(document.getElementById('root')).render(
  <ErrorBoundary
    FallbackComponent={<ErrorFallback />}
    onReset={() => window.location.replace('/')}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>,
);
