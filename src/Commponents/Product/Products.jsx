import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FormControl ,Box,InputLabel,Select,MenuItem } from '@mui/material';
import  { SelectChangeEvent } from '@mui/material/Select';
import{ Backdrop,CircularProgress } from'@mui/material';
import SlideCard from '../HomePage/SlideCard/SlideCard';
import SliderProduct from './SliderProduct';

const Products = () => {
    const[data,setData]=useState([]);
    const[filter,setFilter] =useState(data);
const [loading,setLoading] = useState(false);
let componentMounted = true;

const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};



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

const Loading =() =>{
    return(
        <>
     
     <CircularProgress disableShrink />       </>
    )
}

const filterProduct =(flt)=>{
const updateList=data.filter((x)=>x.category===flt);
setFilter(updateList)
}
const ShowProducts =() =>{
    return(
        <>
        <Box sx={{ width: 300 ,marginRight:'62rem'}}>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">
    Select
  </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Select"
    onChange={handleChange}

    
  >
    <MenuItem value={10} onClick={()=>setFilter(data)}>All</MenuItem>
    <MenuItem value={20} onClick={()=>filterProduct("men's clothing")}>Men's Clothing</MenuItem>
    <MenuItem value={30} onClick={()=>filterProduct("women's clothing")}>Girl's Clothing</MenuItem>
    <MenuItem value={40} onClick={()=>filterProduct('electronics')}>Electronics</MenuItem>
  </Select>
</FormControl>
</Box>
         {/* <div className="buttons d-flex justify-content-center">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")}>Girl's Clothing</button>
        <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct('electronics')}>Electronics</button>

    </div> */}
 {filter.map((product)=>{
return(

<div className="col-md-3 mb-4 py-4" key={product.id}>
<div className="card h-100 text-center p-4 " >
  <img id='zoomin' src={product.image}   className="card-img-top" alt={product.title} height='250px'/>
  <div className="card-body">
    <h5 className="card-title">${product.price}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 <Link to={`/products/${product.id}`}><a href='#'  className="btn btn-primary">Buy</a></Link>
  </div>
</div>
</div>
)

 })}
        </>
    );
   
}
  return (
    
    <div>
      <SliderProduct/>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <hr />
<div className="row justify-content-center">{loading?<Loading/>:<ShowProducts/>}</div>

                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Products
