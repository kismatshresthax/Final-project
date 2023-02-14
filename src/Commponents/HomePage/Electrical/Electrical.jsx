import React from 'react'
import Slider from "react-slick"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Edata from './Edata'
import './style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const SampleNextArrow =(props)=>{
    const{onClick}=props
    return(
        <div className='control-btn'onClick={onClick}>
<button className="next"><i> <ArrowCircleRightIcon/></i></button>
        </div>
    )
}
const SamplePrevArrow =(props)=>{
    const{onClick}=props
    return(
        <div className='control-btn'onClick={onClick}>
<button className="prev"> <i><ArrowCircleLeftIcon/></i></button>
        </div>
    )
}

const Electrical = () => {
    
    const[count,setCount]=useState(0)
    const increment =()=>{
  setCount(count+1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        responsive:[
          {
            breakpoint:1200,
            settings:{
              slidesToShow:3,
              slidesToScroll:1,
            },
        
          },
          {
            breakpoint:900,
            settings:{
              slidesToShow:2,
              slidesToScroll:1,
            }
          },
          {
            breakpoint:700,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
            }
          }
         ]
       
      }
  return (
<>
    <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Electrical product</h1>
          </div>
      <Slider {...settings}>
        {Edata.map((productItems,index) => {
          return (
            <div className='main-box' key={index}>
              <div className='product mtop' >
                <div className='img'>
                  <span className='discount'>{productItems.discountPercentage}%</span>
                  <img className='img' src={productItems.image} alt=''  height='250px'/>
                
                  <div className='product-like'>
                    <label>{productItems.stock + count}</label><br />
                    <FavoriteIcon onClick={increment}/>
                  </div>
                </div>
                <div className='product-details'>
                  <h6>{productItems.title}</h6>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${productItems.price}.00 </h4>
                    <Link to={`/electrical/${productItems.id}`}><button>Buy</button></Link>                   

                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      </div>
      </section>
    
    </>
  )
}

export default Electrical

