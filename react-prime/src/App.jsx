import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'primereact/button';  
import Navigation from './components/Navbar';
import Home from './pages/Dashboard';
import Otro from './pages/otro'
import PerfilUser from './components/PerfilUser'
import { BrowserRouter ,Route,Routes } from 'react-router';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navigation/> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="otro" element={<Otro />}/>
          <Route path="user" element={<PerfilUser />}/>
        </Routes>
    
    
    </BrowserRouter>

    </>
  )
}

export default App
