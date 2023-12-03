import React, { useCallback, useState } from 'react';
import Layout from '../../HomeLayout/HomeLayout';
import { Autocomplete, Box, Button, FormControl, FormLabel, Link, Textarea, Typography } from '@mui/joy';
import { FaArrowCircleRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';
import { Link as Link2 } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { MdOutlineChangeCircle, MdOutlineDeleteForever } from 'react-icons/md';
import { RiImageAddFill } from 'react-icons/ri';
import Switch from '@mui/joy/Switch';
import { HiBugAnt } from "react-icons/hi2";
import WriteComment from './WriteComment';
import MAP from "../../assets/MAPA_COMPLETO.png"

function CreatePost() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [identify, setIdentify] = useState(false)
  const [currentImage2, setCurrentImage2] = React.useState(0);
  const [isViewerOpen2, setIsViewerOpen2] = React.useState(false)
  const images = [MAP]
  
  const openImageViewer2 = React.useCallback((index) => {
    setCurrentImage2(index);
    setIsViewerOpen2(true);
  }, []);

  const closeImageViewer2 = () => {
    setCurrentImage2(0);
    setIsViewerOpen2(false);
  };
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


  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });


  return (
    <Layout>
      <div className='p-10 pt-20'>
        <Link2 to={'/explorar'} className='flex gap-2 items-center hover:underline text-darkGreen'>
          <FaArrowLeft />
          Volver
        </Link2>
        <h1 className='font-extrabold text-darkGreen text-4xl text-center'>Agregar Publicación</h1>
        <div className="grid lg:grid-cols-2 justify-center md:border rounded-lg p-10 mt-10 max-h-[40rem]">
          <div className='grid place-content-center px-10'>
            {imageURL ? (
              <div className='relative group' onClick={openImageViewer}>
                <img
                  src={imageURL}
                  className='rounded-xl max-h-[30rem] cursor-pointer bg-black hover:opacity-95'
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
              <div className='text-3xl flex gap-2 pt-3 cursor-pointer bottom-0'>
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
          <div className='h-[30rem] grid justify-center items-start overflow-y-auto border p-10 rounded-xl '>
            <Typography  level="title-lg"  align='center'>
              Escribe una Publicación
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                marginX: 'auto',
                flexDirection: 'column',
                gap: 3,
                width: '400px',
                marginBottom: 'auto',
                padding: 3,
                borderRadius: '8px',
              }}
            >
              <Textarea 
                minRows={3}
                placeholder="Descripción"
                variant="outlined"
                multiline
                fullWidth
              />
              <FormControl id="grouped-demo">
                <Autocomplete
                  placeholder='Ubicación'
                  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.title}
                />
              </FormControl>
              <p  className='flex justify-center items-center gap-2 font-bold'>
                Ver mapa <FaArrowDown/>
              </p>
              {images.map((src, index) => (
                  <div
                    onClick={() => openImageViewer2(index)}
                    key={index}
                    className='relative group'
                  >
                  <img
                    src={src}
                    className='rounded-xl w-full cursor-pointer bg-black hover:opacity-95'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-xl cursor-pointer'></div>
                </div>
              ))}
              <div className='flex flex-wrap gap-3 justify-center'>
                <Typography  level="title-lg"  align='center'>
                  ¿Deseas sugerir una Identificación?
                </Typography>
                <Switch
                  onChange={() => setIdentify(!identify)}
                  size="sm"
                  slotProps={{
                    thumb: {
                      children: <HiBugAnt />,
                    },
                  }}
                  sx={{
                    '--Switch-thumbSize': '12px',
                  }}
                />
                {identify && (
                <WriteComment showButton={false}/>
                )}
              </div>
              <Button endDecorator={<FaArrowCircleRight />} color="success" variant='soft'>
                Publicar
              </Button>
            </Box>
            
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
      {isViewerOpen2 && (
        <div className='z-50 overflow-hidden relative'>
          <ImageViewer
            src={ images }
            currentIndex={ currentImage2 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer2 }
          />
        </div>
      )}
    </Layout>
  );
}

export default CreatePost;


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];