import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';
import { FaRegUser  } from 'react-icons/fa';

function NavBar() {
  const location = useLocation();

  const isRouteActive = (route) => {
    return `/${location.pathname.split('/')[1].charAt(0).toLocaleLowerCase() + location.pathname.split('/')[1].slice(1) }` === route;
  };

  // Clase CSS para los enlaces
  const linkClass = 'hover:text-gray-600 text-darkGreen';
  const activeLinkClass = 'text-darkRed';


  return (
    <>
        <div className='fixed top-0 z-40 w-screen bg-white'>
            <div className=' md:shadow-lg py-3 xs:py-5 xl:py-2 px-4 xl:px-10 flex md:grid grid-cols-3 place-content-center md:place-items-center justify-between'>
                <Link to={"/"} className='hidden md:flex justify-center '>
                    <img src={LOGO} alt='' className='h-20 '/>
                </Link>
                <div className='hidden md:flex flex-wrap justify-center gap-3 lg:gap-8 text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold'>
                    <Link
                    to='/'
                    className={`${isRouteActive('/') ? activeLinkClass : linkClass}`}
                    >
                    Inicio
                    </Link>
                    <Link
                    to='/explorar'
                    className={` ${isRouteActive('/explorar') ? activeLinkClass : linkClass}`}
                    >
                    Explorar
                    </Link>
                    <Link
                    to='/comunidad'
                    className={`${isRouteActive('/comunidad') ? activeLinkClass : linkClass}`}
                    >
                    Comunidad
                    </Link>
                    <Link
                    to='/nosotros'
                    className={`${isRouteActive('/nosotros') ? activeLinkClass : linkClass}`}
                    >
                    Nosotros
                    </Link>
                </div>
                <Link to={"/comunidad/ingresar"} className='bg-gray-200 hover:bg-gray-300 text-xs font-extralight p-3 rounded-md flex gap-1 flex-col items-center text-center w-28 '>
                    <FaRegUser />
                    <p>Iniciar Sesión</p>
                </Link>
            </div>
        </div>
    </>
  );
}

export default NavBar;
