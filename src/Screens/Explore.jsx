import React from 'react'
import Layout from '../HomeLayout/HomeLayout'
import CardPost from '../Components/Explorar/CardPost'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useGetPublicationsQuery} from "../features/Api/postApiSlice"

function Explore() {

  const {data, isSuccess} = useGetPublicationsQuery()
  
  return (
    <Layout>
        <div className='p-10 pt-20'>
          <h1 className='font-extrabold text-darkGreen text-4xl text-center'>Observaciones</h1>

          <div className='mt-10'>
            <div className='flex flex-wrap justify-center gap-3 lg:justify-between items-center p-5'>
              <Link to={'/explorar/crear-publicacion'} className='flex items-center gap-1 border rounded-xl px-5 py-2 bg-gray-200 hover:bg-gray-300'><FaPlus/> Agregar Publicación</Link>
            </div>
            <div className='border p-10 flex flex-wrap gap-20 justify-center rounded-xl'>
              {isSuccess && data && data.map((post, index)=>(
                <CardPost key={index} id={post.id_publicacion} image={post.imagen} comments={post.comentarios} commonname={post.nombre_comun} likes={post.likes} username={post.nombre_usuario} userId={post.id_usuario}/>
              ))}
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Explore