import React, { useCallback, useState } from 'react'
import Layout from '../../HomeLayout/HomeLayout'
import {obs} from '../../data'
import { AspectRatio, Box, Card, CardContent, CardCover, Link, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaComment, FaHeart } from 'react-icons/fa';
import {Link as Link2 } from "react-router-dom" 
import Comments from './Comments';
import ImageViewer from 'react-simple-image-viewer';
import { useGetPublicationQuery } from '../../features/Api/postApiSlice';

function PostDetail() {
    const { idPost } = useParams();

    const postId = parseInt(idPost); 
    const {data, isSuccess} = useGetPublicationQuery(idPost)

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const images = isSuccess ? [data.imagen] : [];

    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
    

  return (
    <Layout>
      <div className='p-10 pt-20'>
        <Link2 to={'/explorar'} className='flex gap-2 items-center hover:underline text-darkGreen'>
          <FaArrowLeft />
          Volver
        </Link2>
        <h1 className='font-extrabold text-darkGreen text-4xl text-center'>Publicación</h1>
        {isSuccess && (
          <div className='mt-10'>
          <div className="grid lg:grid-cols-2 justify-center md:border rounded-lg p-10">
            <div className='flex flex-col justify-center'>
              {isSuccess && images.map((src, index) => (
                <div
                  key={index}
                  className='relative group'
                  onClick={() => openImageViewer(index)}
                >
                  <img
                    src={src}       
                    className='rounded-xl w-full cursor-pointer bg-black hover:opacity-95'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-xl cursor-pointer'></div>
                </div>
              ))}
              <div className='flex flex-wrap justify-between gap-2 mt-5'>
                <Typography sx={{ fontSize: 'xl', fontWeight: 'xl' }} className='p-3'>{data.nombre_comun ?? 'Sin Identificación'}</Typography>
                <Link
                  level="body-md"
                  underline="none"
                  startDecorator={<FaHeart />}
                  sx={{
                    fontWeight: 'md',
                    ml: 'auto',
                    color: 'danger.plainColor',
                  }}
                >
                  {data.likes}
                </Link>
                <Link
                  level="body-md"
                  underline="none"
                  startDecorator={<FaComment  />}
                  sx={{
                    fontWeight: 'md',
                    color: 'primary.plainColor',
                  }}
                >
                  {data.comentarios}
                </Link>
              </div>
            </div>
            <div className='md:px-14' >
              <Comments qty={data.comentarios} details={data.descripcion} location={data.ubicacion} idPost={idPost} userName={data.nombre_usuario}/>
            </div>
          </div>
        </div>

        )}
      </div>
      {isViewerOpen && (
        <div className='z-50 overflow-hidden relative'>
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        </div>
      )}
    </Layout>
  )
}

export default PostDetail