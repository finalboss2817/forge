import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("React Mounting Error:", error);
    container.innerHTML = `<div style="color: white; padding: 20px;">Error loading app. Please check console.</div>`;
  }
} else {
  console.error("Critical: Root element not found.");
}