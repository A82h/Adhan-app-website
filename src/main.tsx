import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

function initApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp, { once: true });
    } else {
      setTimeout(initApp, 20);
    }
    return;
  }

  createRoot(rootElement).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>,
  );
}

initApp();
