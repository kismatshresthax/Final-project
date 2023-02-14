import React from "react"
import { useState } from "react"
const SearchBar = () => {
const[query,setQuery]= useState('')
console.log(query)
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search anything...'  onChange={e=>setQuery(e.target.value)} />
          </div>

          
            
          
        </div>
      </section>
    </>
  )
}

export default SearchBar