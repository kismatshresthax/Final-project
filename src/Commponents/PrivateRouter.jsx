import React from 'react'
import { Route, Routes } from 'react-router'
import About from './About/About'
import { Cart } from './Cart/Cart'
import { Contact } from './Contact/Contact'
import Electrical from './HomePage/Electrical/Electrical'
import Electricalproduct from './HomePage/Electrical/Electricalproduct'
import LatestCard from './HomePage/flashDeal/LatestCard'
import { HomePage } from './HomePage/HomePage'
import Product from './Product/Product'
import Products from './Product/Products'
import { Forgotpassword } from './SignUp/Forgotpassword'
import { Login } from './SignUp/Login'
import { SignUp } from './SignUp/SignUp'

export const PrivateRouter = () => {
  
  return (
<>
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/cart' element ={<Cart/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/electrical' element={<Electrical/>}/>
    <Route path='/electrical/:id' element={<Electricalproduct/>}/>
    <Route path='/latest' element={<LatestCard/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/forgot-password' element={<Forgotpassword/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    
</Routes>



</> 
 )
}
