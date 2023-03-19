import React from "react"
import { Link } from "react-router-dom"
import './Home.css'
const Categories = () => {
  

  return (
    <>
      <div className='category'>
        
            <div className='box f_flex' >
              <img src='img/mg10.png' alt='' />
              <Link to='/Latest'><button>Fashion</button></Link>
            </div>
            <div className='box f_flex' >
              <img src='img/mg12.png' alt='' />
              <Link to='/electrical'><button >Electronics</button></Link>
            </div>
            <div className='box f_flex' >
              <img src='img/mg11.png' alt='' />
              <button>Cars</button>
            </div>
            <div className='box f_flex' >
              <img src="img/mg9.png"  alt='' />
              <button>Gifts</button>
            </div>
           
            
         
       
      </div>
    </>
  )
}

export default Categories