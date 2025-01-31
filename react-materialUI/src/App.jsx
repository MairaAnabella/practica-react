import { useState } from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'

import './App.css'

import { DashboardLayout } from '@toolpad/core'
import DemoPageContent from './pages/DemoPageContent'
import { AppProvider } from '@toolpad/core'
import useAuthentication from './components/AutenticationProvider'
import NAVIGATION from './components/Navigation'
import demoTheme from './components/Theme'
import ComponenteDos from './pages/otro' 

function App() {
  
  
  const { session, authentication } = useAuthentication({
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://unavatar.io/github/netflix',
  });
  return (
    <>
    
     <BrowserRouter>
     <AppProvider
        session={session}
        authentication={authentication}
        navigation={NAVIGATION}
        theme={demoTheme}
       
      >
        <DashboardLayout defaultExpanded={false}>
   
        <Routes>
          <Route   path="/"
              element={<DemoPageContent />}></Route>
          <Route   path="home"
              element={<ComponenteDos  />}></Route>
        </Routes>
  
        </DashboardLayout>
        </AppProvider>
     </BrowserRouter>
    </>
  )
}

export default App
