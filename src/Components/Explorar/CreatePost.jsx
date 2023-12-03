import React, { useCallback, useState } from 'react';
import Layout from '../../HomeLayout/HomeLayout';
import { Link } from '@mui/joy';
import { FaArrowLeft } from 'react-icons/fa';
import { Link as Link2 } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { MdOutlineChangeCircle, MdOutlineDeleteForever } from 'react-icons/md';
import { RiImageAddFill } from 'react-icons/ri';

function CreatePost() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImageFile(selectedImage);
    setImageURL(URL.createObjectURL(selectedImage));
  };

  const handleDeleteImage = () => {
    setImageFile(null);
    setImageURL(null);
  };

  return (
    <Layout>
      <div className='p-10 pt-20'>
        <Link2 to={'/explorar'} className='flex gap-2 items-center hover:underline text-darkGreen'>
          <FaArrowLeft />
          Volver
        </Link2>
        <h1 className='font-extrabold text-darkGreen text-4xl text-center'>Agregar Publicación</h1>
        <div className="grid lg:grid-cols-2 justify-center md:border rounded-lg p-10 mt-10">
          <div className='grid place-content-center'>
            {imageURL ? (
              <div className='relative group' onClick={openImageViewer}>
                <img
                  src={imageURL}
                  className='rounded-xl w-full cursor-pointer bg-black hover:opacity-95'
                  alt={`Selected Image`}
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-xl cursor-pointer'></div>
              </div>
            ) : (
              <label className='cursor-pointer flex flex-col justify-center items-center rounded-xl p-20 border-8 border-gray-300 '>
                <RiImageAddFill size={100} className='text-gray-300' />
                <h1 className='text-2xl text-gray-300'>Agregar Imagen</h1>
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </label>
            )}
            {imageURL && (
              <div className='text-3xl flex gap-2 px-3 py-1 cursor-pointer bottom-0'>
                <button onClick={handleDeleteImage} className='flex flex-col items-center'>
                  <MdOutlineDeleteForever color='red' />
                  <p className='text-xs'>Eliminar</p>
                </button>
                <label className='flex flex-col items-center'>
                  <MdOutlineChangeCircle color='blue' />
                  <p className='text-xs'>Cambiar</p>
                  <input
                    type='file'
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            )}
          </div>
          <div className='h-[30rem] flex overflow-y-auto'>
            <input type="checkbox" name="check-toggle" id="checkbox" className='hidden'/>
            <label for="checkbox" class="toggle">
                <div class="toggle__circle"></div>
            </label>
          </div>
        </div>
      </div>

      {isViewerOpen && (
        <div className='z-50 overflow-hidden relative'>
          <ImageViewer
            src={[imageURL]}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </Layout>
  );
}

export default CreatePost;
