import React from 'react'
import Footer from './footer/Footers'
import Head from './header/Head'

export const Layout = ({children}) => {
  
  return (
<>
<Head />
{children}

<Footer/>


</>  )
}
