
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './routers/routes.jsx';
import SidebarNav from './components/Slide-bar.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
    <SidebarNav/>
    <MyRoutes/>
    </BrowserRouter>
  
    </>
  )
}

export default App
