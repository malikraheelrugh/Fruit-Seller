import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
export default createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)