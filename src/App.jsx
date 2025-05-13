import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Details from './pages/details'
import Login from './pages/login'
import Sell from './pages/sell'
import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify'
import userContext from './context'
import { useState } from 'react'

function App() {
    const [logged, setLogged]=useState(false)
    const changeLog = () =>{
        if(logged) setLogged(false)
        else setLogged(true)
    }

    return(
        <userContext.Provider value={{logged, changeLog}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/product-details' element={<Details/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/sell-product' element={<Sell/>}/>
                </Routes>
                <ToastContainer autoClose={1000}/>
            </BrowserRouter>
        </userContext.Provider>
    )
}

export default App