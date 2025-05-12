import './navbar.scss'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <Link to='/'><img className='olxLogo' src="/olx_logo.png"/></Link>
        <input type="text" className='locationInput'/>
        <input type="text" className='searchProduct'/>
        <div>English</div>
        <i class="bi bi-heart"></i>
        <div>Login</div>
        <Link to='/sell-product'><img src="/addButton.png" className='addProduct'/></Link>
    </div>
  )
}

export default Navbar
