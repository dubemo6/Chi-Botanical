import React from 'react';
import ReactDOM from 'react-dom/client'; // Important: Notice '/client' for createRoot
import App from './App.jsx'; // Make sure this path is correct for your App component

// Find the root HTML element where your React application will be mounted
const rootElement = document.getElementById('root');

// Use ReactDOM.createRoot to render your App component
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Error: Root element with ID 'root' not found in your index.html. Your React app cannot mount.");
}