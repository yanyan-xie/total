import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

const router = [
    {
        path:'/about',
        element:<About/>
    },{
        path:'/home',
        element:<Home/>
    },{
        path:'/',
        element:<Navigate to="/about"/>
    }
]
export default router