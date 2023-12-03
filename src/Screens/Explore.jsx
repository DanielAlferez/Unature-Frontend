import React from 'react'
import Layout from '../HomeLayout/HomeLayout'
import CardPost from '../Components/Explorar/CardPost'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {obs} from "../data"

function Explore() {

  return (
    <Layout>
        <div className='p-10 pt-20'>
          <h1 className='font-extrabold text-darkGreen text-4xl text-center'>Observaciones</h1>

          <div className='mt-10'>
            <div className='flex flex-wrap justify-center gap-3 lg:justify-between items-center p-5'>
              <Link to={'/explorar/crear-publicacion'} className='flex items-center gap-1 border rounded-xl px-5 py-2 bg-gray-200 hover:bg-gray-300'><FaPlus/> Agregar Publicación</Link>
              <div className="flex items-center justify-center border rounded-lg ">
                <div className="rounded-lg bg-darkGreen">
                  <div className="flex">
                    <div className="flex w-20 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white ">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                      </svg>
                    </div>
                    <input type="text" className="text-xs w-full min-w-[250px] bg-gray-200 px-2 font-semibold outline-0" placeholder="" id=""/>
                    <button className="p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-black transition-colors">Buscar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='border p-10 flex flex-wrap gap-20 justify-center rounded-xl'>
              {obs.map((post, index)=>(
                <CardPost key={index} id={post.publicacion_id} image={post.imagen} comments={post.comentarios} commonname={post.nombre_comun} likes={post.likes} username={post.nombre_usuario}/>
              ))}
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Explore