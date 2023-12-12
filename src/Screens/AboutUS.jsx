import React from 'react'
import Layout from '../HomeLayout/HomeLayout'
import LOGO from "../assets/LOGO.png"
import ALFEREZ from "../assets/alferez.png"
import DAVID from "../assets/david.png"
import FREINDER from "../assets/freinder.png"
import { useGetGlobalQuery } from '../features/Api/postApiSlice'

function AboutUS() {
    const {data, isSuccess} = useGetGlobalQuery()
  return (
    <Layout>
        <h1 className='font-extrabold text-darkGreen text-4xl text-center mt-40'>Sobre Nosotros</h1>
        <div className='grid grid-cols-5 p-20'>
            <div className='flex justify-center items-center col-span-2'>
                <img src={LOGO  } alt=""  className='h-60 md:h-80 animate-bounce-y'/>
            </div>
            <div className="card col-span-3 text-darkGreen transition-all cursor-pointer group bg-gradient-to-tl from-gray-50 to-gray-100 hover:from-white hover:to-gray-100 border-r-2 border-t-2 border-gray-50 m-4 rounded-lg overflow-hidden relative">
                <div className="px-8 py-10">
                    <div className="bg-lightGreen w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-darkGreen transition-all"></div>
                    <div className="font-bold text-xl">
                    Unature es una aplicación diseñada para resolver el problema de la falta de conocimiento sobre la biodiversidad en la Universidad de los Llanos.
                    </div>
                    <div className="text-darkGreen mt-8">
                        <p> Permite a estudiantes y profesores identificar y estudiar insectos y plantas del campus, promoviendo la colaboración interdisciplinaria y la generación de datos valiosos para la investigación científica y la conciencia ambiental.</p>
                    </div>
            </div>
                <div className="h-2 w-full bg-gradient-to-l via-lightRed group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-darkRed group-hover:via-lightRed w-[70%] m-auto rounded transition-all"></div>
                </div>
        </div>
        
        <div className='flex flex-wrap place-content-center gap-20 my-10'>
           
            <div className=" hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute blur z-10 fill-gray-300 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                    <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center">
                    <span className="font-bold text-6xl ml-2">{isSuccess && data.num_publicaciones}+</span>
                    <p className="font-bold">Publicaciones</p>
                </div>
            </div>
            <div className=" hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute blur z-10 fill-lightGreen duration-500 group-hover:blur-none group-hover:scale-105"
                >
                    <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center">
                    <span className="font-bold text-6xl ml-2">{isSuccess && data.num_identificaciones}+</span>
                    <p className="font-bold">Identificaciones</p>
                </div>
            </div>
            <div className=" hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute blur z-10 fill-red-100 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                    <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center">
                    <span className="font-bold text-6xl ml-2">{isSuccess && data.num_usuarios-1}+</span>
                    <p className="font-bold">Usuarios</p>
                </div>
            </div>
        </div>

        <div className='p-20'>
            <h1 className='font-extrabold text-darkGreen text-4xl text-center'>Nuestro Equipo</h1>
            <div className='flex flex-wrap gap-10 justify-center p-20'>
                <div class="cardDev">
                    {/* <div class="card-photo"></div> */}
                    <img src={ALFEREZ} alt="" className='h-28 rounded-full m-1'/>
                    <div class="card-title">Daniel Alférez <br/>
                        <span>Fullstack dev &amp; UX UI</span>
                    </div>
                    <div class="card-socials">
                        <button class="card-socials-btn facebook">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                        </button>
                        <button class="card-socials-btn github">
                            <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </button>
                        <button class="card-socials-btn linkedin">
                            <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="cardDev">
                    {/* <div class="card-photo"></div> */}
                    <img src={FREINDER} alt="" className='h-28 rounded-full m-1'/>
                    <div class="card-title">Andrés Matoma <br/>
                        <span>Fullstack dev &amp; UX UI</span>
                    </div>
                    <div class="card-socials">
                        <button class="card-socials-btn facebook">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                        </button>
                        <button class="card-socials-btn github">
                            <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </button>
                        <button class="card-socials-btn linkedin">
                            <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="cardDev">
                    {/* <div class="card-photo"></div> */}
                    <img src={DAVID} alt="" className='h-28 rounded-full m-1'/>
                    <div class="card-title">David Torres <br/>
                        <span>Fullstack dev &amp; UX UI</span>
                    </div>
                    <div class="card-socials">
                        <button class="card-socials-btn facebook">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                        </button>
                        <button class="card-socials-btn github">
                            <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </button>
                        <button class="card-socials-btn linkedin">
                            <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AboutUS