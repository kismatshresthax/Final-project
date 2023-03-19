import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
export const NavBar = () => {
    const state = useSelector((state) =>state.handleCart)
    return (
        <>
      
        <main className='main-navbar'>
            <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm ">
                <div className="container">
                    <a id='kist' className="navbar-brand fw-bold fs-4" href="#"><h2> Kist Collection </h2></a>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                             <Link to='/'> <button>  Home</button></Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/products'> <button>Products</button> </Link>
                            </li>
                            <li className="nav-item">
                             <Link to='/about'>  <button> 
                                About</button></Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/contact'><button>Contact</button> </Link>
                            </li>
                        </ul>
<div className="buttons">
  <Link to='/login'> <button className='btn'><a href="" className="btn btn-outline-dark"> <i className='fa fa-sign-in me-1'></i> Login</a></button></Link> 
    <button className='btn'><a href="" className="btn btn-outline-dark"> <i className='fa fa-user-plus me-1'></i> Register</a></button>
  <Link to='cart'> <button className='btn'><a href="" className="btn btn-outline-dark"> <i className='fa fa-shopping-cart me-1'></i>Cart({state.length})</a></button></Link> 

</div>
                        
                    </div>
                </div>
            </nav>
            </main>
            
        </>
    )
}
