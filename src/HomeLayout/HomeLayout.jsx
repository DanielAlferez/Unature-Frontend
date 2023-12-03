import React, { useEffect } from 'react'
import Navbar from './NavBar'
import Footer from './Footer';

const Layout = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <Navbar/>
        <div className='mt-20'/>
          {props.children}
        <Footer/>
    </>
  )
}

export default Layout