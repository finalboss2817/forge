import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const init = () => {
  const container = document.getElementById('root');
  if (container) {
    try {
      const root = ReactDOM.createRoot(container);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    } catch (e) {
      console.error("Critical Render Failure:", e);
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}