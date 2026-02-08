
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Failure: Root element not found.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Meena Technologies Core: System Operational.");
  } catch (err) {
    console.error("App Launch Failed:", err);
    rootElement.innerHTML = `
      <div style="padding: 2rem; color: #ef4444; font-family: sans-serif; text-align: center; background: #020617; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">REACT MOUNT FAILURE</h1>
        <p style="color: #94a3b8; font-size: 0.875rem;">${err instanceof Error ? err.message : String(err)}</p>
      </div>
    `;
  }
}
