import './navbar.scss'
import {Link, useNavigate} from 'react-router-dom'
import userContext from '../../context'
import { useContext } from 'react'

function Navbar() {
  const {logged, changeLog}=useContext(userContext)
  const navigate=useNavigate()
  const getLogin = () =>{
    navigate('/login')
  }
  const getLogout = () =>{
    changeLog()
  }

  return (
    <div className="navbar">
        <Link to='/'><img className='olxLogo' src="/olx_logo.png"/></Link>
        <input type="text" className='locationInput' placeholder='India'/>
        <input type="text" className='searchProduct' placeholder='Laptops, Mobiles, Cars....'/>
        <div>English</div>
        <i class="bi bi-heart"></i>
        { !logged &&
          <div style={{cursor:'pointer'}} onClick={getLogin}>Login</div>
        }
        { logged && 
          <div style={{cursor:'pointer'}} onClick={getLogout}>LogOut</div>
        }
        <Link to='/sell-product'><img src="/addButton.png" className='addProduct'/></Link>
    </div>
  )
}

export default Navbar
