import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value) => {
          return (
            
            
              <div key={value.id} className="card text-bg-dark" >
  <img  src={value.url} className="card-img"  alt="..."/>
  <div  className="card-img-overlay">
    <h1 className="card-title">{value.title}</h1>
    <p className="card-text">{value.desc}</p>
 <Link to={`/products/${value.id}`} ><span>Buy</span></Link>
  </div>
</div>
           
          )
        })}
      </Slider>
     
      
        
      
    </>
  )
}

export default SlideCard