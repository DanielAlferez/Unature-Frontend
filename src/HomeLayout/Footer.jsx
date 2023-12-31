import React from 'react'
import logo from '../assets/LOGO.png'

function Footer() {
  return (
        <footer className="bg-gray-100 shadow border-2 text-darkGreen">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-16" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Unature</span>
                    </a>
                   
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Unature</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}

export default Footer