import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
        <img className='olxLogo' src="/olx_logo.png"/>
        <input type="text" className='locationInput'/>
        <input type="text" className='searchProduct'/>
        <div>English</div>
        <i class="bi bi-heart"></i>
        <div>Login</div>
        <img src="/addButton.png" className='addProduct'/>
    </div>
  )
}

export default Navbar
