
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { MessagingProvider } from './controllers/MessagingContext';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <MessagingProvider>
        <App />
      </MessagingProvider>
    </React.StrictMode>
  );
}
