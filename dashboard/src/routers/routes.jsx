import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home} from '../pages/Home';
export function MyRoutes(){
    return (
        <Routes>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}