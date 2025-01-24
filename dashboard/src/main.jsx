import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Estilos base de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css'; // Puedes cambiar el tema
import 'primereact/resources/primereact.min.css'; // Estilos básicos
import 'primeicons/primeicons.css'; // Iconos de PrimeReact

import { PrimeReactProvider } from 'primereact/api';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
  </StrictMode>,
)
