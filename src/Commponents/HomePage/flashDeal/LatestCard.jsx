import React from 'react'
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { CircularProgress } from '@mui/material';

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

const LatestCard = () => {
  const[count,setCount]=useState(0)
  const increment =()=>{
setCount(count+1)
  }
    const[data,setData]=useState([]);
    const[filter,setFilter] =useState(data);
const [loading,setLoading] = useState(false);
let componentMounted = true;


const getProducts = async() =>{
    setLoading(true);
    const response = await fetch('http://fakestoreapi.com/products')
    if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
    }
    return ()=>{
        componentMounted=false;
    }
}
useEffect(()=>{
getProducts();
},[])

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
  const Loading=()=>{
    return (
      <>
      <div className="col-md-6">
        <CircularProgress disableShrink />
        </div>
      </>

    )
  }

  return (
    <>
    <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Fashion cloth</h1>
          </div>
          {loading?<Loading/>:
      <Slider {...settings}>
        {data.map((productItems,index) => {
          return (
            <div className='main-box' key={index}>
              <div className='product mtop' >
                <div className='img'>
                  <span className='discount'>50% Off</span>
                  <img src={productItems.image} alt=''  height='250px'/>
                  <div className='product-like'>
                    <label>{productItems.rating.count + count}</label><br />
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
                    <Link to={`/products/${productItems.id}`}><button>Buy</button></Link>                   
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
}
      </div>
      </section>
    
    </>
      

  )
}

export default LatestCard
