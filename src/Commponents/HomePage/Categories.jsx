import React from "react"
import { Link } from "react-router-dom"
import './Home.css'
const Categories = () => {
  

  return (
    <>
      <div className='category'>
        
            <div className='box f_flex' >
              <img src='' alt='' />
              <Link to='/Latest'><button>Fashion</button></Link>
            </div>
            <div className='box f_flex' >
              <img src='' alt='' />
              <Link to='/electrical'><button>Electrical</button></Link>
            </div>
            <div className='box f_flex' >
              <img src='' alt='' />
              <button>Cars</button>
            </div>
            <div className='box f_flex' >
              <img  alt='' />
              <button>Gifts</button>
            </div>
            <div className='box f_flex' >
              <img  alt='' />
              <button>Music</button>
            </div>
            <div className='box f_flex' >
              <img src='' alt='' />
              <button>Health & Beauty</button>
            </div>
            <div className='box f_flex' >
              <img src='' alt='' />
              <button>Baby Toys</button>
            </div>
            
         
       
      </div>
    </>
  )
}

export default Categories