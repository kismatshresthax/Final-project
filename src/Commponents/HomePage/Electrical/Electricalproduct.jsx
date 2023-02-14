import React, { useState } from 'react'
import { useParams } from 'react-router';
import Edata from './Edata'
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

const Electricalproduct = () => {
    const [count, setCount] = useState(0);
    const[loading,setLoading]=useState(false);
    const proid = useParams();
    const proDetail = Edata.filter(x=>x.id == proid.id)
    const product = proDetail[0]



    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }
    

    const increase = () => {
        if(count<5){
        setCount((prevCount) => prevCount + 1)
    }else{
        setCount((prevCount) => 0 );
    }
      }
      const decrease = () => {
        if(count>0){
        setCount((prevCount) => prevCount - 1)
    } else {
        setCount((prevCount) => 0)
    }
      }
     

    const Loading =()=>{
        return (
            <>
        <div className="col-md-6">
            Loading....
        </div>
            </>
        )
    }
   


    const EShowProduct=()=>{
        const watchImg120 = product.image

        return (
            <>
            <div className='col-md-6 '>
                  <div className='zoom-in'>   <ReactImageMagnify  {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: watchImg120

       
        
    },
    largeImage: {
        src: watchImg120,
        width: 1700,
        height: 1500
    }
}} />
</div>
              

            </div>
            <div className="col-md-6">
                <h5 className='text-uppercase text-black-50'>
                    {product.category}
                </h5>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'> Rating {product.rating && product.rating}
                <i className='fa fa-star'>
                    </i></p>
                    <h6 className="display-6 fw-bold my-4">${product.price}</h6>
                    <p className='lead'>{product.description}</p>
                   <div  className='inc-dec'>
                   <button
                className="decrease-btn"
                onClick={decrease}
            >-</button>
                        <p>{count}</p><button
                className="increase-btn"
                onClick={increase}
            >+</button>
            <h4>${product.price*count}</h4>
            </div>
                    <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>Add to Cart</button>
       <Link to='/cart'> <button className='btn btn-outline-dark'>Go to Cart</button></Link>
            
            </div>

            </>
        )
    }
  return (
    <div>
    <div className="container py-5">
        <div className="row py-4 ">
            {loading ? <Loading/> :<EShowProduct/>}
        </div>
    </div>
</div>
  )
}

export default Electricalproduct
