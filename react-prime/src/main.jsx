import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
//import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/themes/lara-light-purple/theme.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
<PrimeReactProvider>
  <App/>
</PrimeReactProvider>
  </StrictMode>,
)
