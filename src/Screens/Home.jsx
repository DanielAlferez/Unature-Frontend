import React from 'react'
import fondo from "../assets/Fondo.svg"
import Layout from '../HomeLayout/HomeLayout'
import BOOK from "../assets/BOOK.png"
import HowItWorks from '../Components/HowItWorks'
import Features from '../Components/Features'
import MapaC from "../assets/MAPA_COMPLETO.png"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Layout>
        <div className='grid md:grid-cols-2 mt-5 '>
            <div className='grid place-content-center lg:p-40 p-20'>
                <div className='grid gap-3'>
                    <p className='text-lightGreen text-2xl font-semibold'>UNATURE</p>
                    <h1 className='font-extrabold text-darkGreen text-4xl'>Conéctate con la NATURALEZA</h1>
                    <p>Unature permite a estudiantes y profesores identificar y estudiar insectos y plantas del campus, promoviendo la colaboración interdisciplinaria y la generación de datos valiosos para la investigación científica y la conciencia ambiental.</p>
                </div>
                <Link to={'/explorar'} class="mt-10 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-52 rounded-md bg-red-900 p-2 flex justify-center items-center font-extrabold">
                    <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
                    <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
                    <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-darkRed delay-150 group-hover:delay-150"></div>
                    <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-darkRed delay-150 group-hover:delay-200"></div>
                    <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-darkRed delay-150 group-hover:delay-300"></div>
                    <p class="z-10">Explora</p>
                </Link>
            </div>
            <div className=' flex justify-center items-center'>
                <img src={fondo} alt="" className='h-96 w-96 lg:h-[35rem] lg:w-[45rem] object-contain rounded-3xl'/>
            </div>
        </div>

        <HowItWorks/>

        <Features/>

        <div className=" text-darkGreen text-center my-20 px-40 mb-40">
            <div className="flex flex-col place-content-center justify-center items-center">
                <h2 className="text-4xl font-bold">¿Qué Estás Esperando?</h2>
                <div className='grid place-content-center'>
                    <img src={BOOK} alt=""  className='h-40 animate-bounce-y'/>
                </div>
                <p className="text-lg pt-5 pb-10 max-w-3xl">
                    Únete a nuestra comunidad de amantes de la naturaleza y contribuye a la preservación del entorno en el campus Barcelona de la Universidad de los Llanos.
                </p>
                <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-darkGreen hover:before:[box-shadow:_20px_20px_20px_30px_#d6fff4] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-darkGreen relative bg-white h-16 w-64 border text-left p-3 text-gray-800 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-teal-200 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-teal-100 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                    Únete
                </button>
            </div>
        </div>
        <div className=" text-darkGreen text-center my-20 px-20 mb-40">
            <h2 className="text-4xl font-bold">Conoce el Mapa de Nuestro Campus</h2>
            <img src={MapaC} alt="" className='pt-20 rounded-3xl'/>
        </div>

        
    </Layout>
  )
}

export default Home