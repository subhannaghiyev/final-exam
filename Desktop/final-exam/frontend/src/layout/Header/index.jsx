import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
    <>
    <div className='header'>
        <img className='img' src="https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png" alt="" />
        <ul className='list'>
            <Link to="/"><li style={{color : "#96B9EB"}}>Home</li></Link>
            <Link to="/service"><li>Service</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/price"><li>Price</li></Link>
            <Link to="/team"><li>Team</li></Link>
            <Link to="/news"><li>News</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/add-product"><li>Add Product</li></Link>
            <Link to="/sign-in"><li style={{color : "#96B9EB"}}>Sign in</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Header