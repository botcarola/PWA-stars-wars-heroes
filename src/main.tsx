import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// local path to sw: "../dist/sw.js"
// production path to sw: "sw.js"

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register("sw.js")
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
