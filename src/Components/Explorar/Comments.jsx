import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ShowComment from './ShowComment';
import { FaPlus } from 'react-icons/fa';
import { Typography } from '@mui/joy';
import MAP from "../../assets/MAPA_COMPLETO.png"
import ImageViewer from 'react-simple-image-viewer';
import WriteComment from './WriteComment';

export default function Comments({qty}) {
  const [index, setIndex] = React.useState(0);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false)
  const images = [MAP]
  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
      <Box
      sx={{
        flexGrow: 1,
        overflowX: 'hidden',
      }}
    >
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList
          sx={{
            pt: 1,
            justifyContent: 'center',
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&::after': {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
            Detalles
          </Tab>
          <Tab indicatorInset>
            Identificaciones{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? 'primary' : 'neutral'}
            >
              {qty}
            </Chip>
          </Tab>
          <Tab indicatorInset>
            Sugerir {' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? 'primary' : 'neutral'}
            >
              <FaPlus/>
            </Chip>
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        >
          <TabPanel value={0}>
            <div className='overflow-y-auto h-[30rem] flex flex-col gap-5 items-start'>
              <div className='flex flex-wrap gap-1'>
                <Typography level="title-lg">Descripción:</Typography>
                <Typography level="body-md">
                    Está hormiga me la encontre cerca del edificio davinci dentro de un salon
                </Typography>
              </div>
              <div className='flex flex-col gap-1'>
                <Typography level="title-lg">Ubicación:</Typography>
                <Typography level="body-md">
                    Edificios: {' '}
                    <Typography level="body-sm">
                      1. Davinci
                    </Typography>
                </Typography>
                
                {images.map((src, index) => (
                  <div
                  onClick={() => openImageViewer(index)}
                  key={index}
                  className='relative group mt-5'
                >
                  <img
                    src={src}
                    className='rounded-xl w-full cursor-pointer bg-black hover:opacity-95'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-xl cursor-pointer'></div>
                </div>
              ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div className='overflow-y-auto h-[30rem] grid gap-5'>
            {[...Array(qty)].map(()=>(
              <ShowComment/>
            ))}
            </div>
          </TabPanel>
          <TabPanel value={2}>
            <div className='overflow-y-auto h-[30rem] grid gap-5'>
                <WriteComment/>
            </div>
          </TabPanel>

        </Box>
      </Tabs>
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
    </Box>
  );
}