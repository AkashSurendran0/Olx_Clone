import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Details from './pages/details'
import Login from './pages/login'
import Sell from './pages/sell'
import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product-details' element={<Details/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/sell-product' element={<Sell/>}/>
            </Routes>
            <ToastContainer autoClose={1000}/>
        </BrowserRouter>
    )
}

export default App