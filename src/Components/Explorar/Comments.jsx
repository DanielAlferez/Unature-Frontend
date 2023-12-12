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
import { useGetIdenfitiesQuery } from '../../features/Api/postApiSlice';

export default function Comments({qty, details, location, idPost, userName}) {
  const [index, setIndex] = React.useState(0);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false)
  const images = [MAP]

  const {data, isSuccess} = useGetIdenfitiesQuery(idPost)

  function getLocationAndNameById(id) {
    const locationObject = locationUnillanos.find(item => item.id === id);
  
    if (locationObject) {
      const { location, name } = locationObject;
      return { location, name };
    } else {
      // Devuelve un valor predeterminado o maneja el caso en el que no se encuentra el ID
      return { location: 'No encontrado', name: 'No encontrado' };
    }
  }

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
      {isSuccess && (
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
                <Typography color='warning' level="title-lg">{userName}</Typography>
              </div>
              <div className='flex flex-wrap gap-1'>
                <Typography level="title-lg">Descripción:</Typography>
                <Typography level="body-md">
                    {details}
                </Typography>
              </div>
              <div className='flex flex-col gap-1'>
                <Typography level="title-lg">Ubicación:</Typography>
                <Typography level="body-md">
                    {getLocationAndNameById(location).location}: {' '}
                    <Typography level="body-sm">
                    {getLocationAndNameById(location).name}
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
            {data && (
              <div className='overflow-y-auto h-[30rem] grid gap-5'>
                {data.map((iden)=>(
                  <ShowComment name={iden.Identificacion.Usuario.nombre_usuario} idenId={iden.Identificacion.id_identificacion} common_name={iden.Identificacion.nombre_comun} genus={iden.Identificacion.genero} sp={iden.Identificacion.especie} info={iden.Identificacion.informacion_adicional} like={iden.aprobaciones}/>
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel value={2}>
            <div className='overflow-y-auto h-[30rem] grid gap-5'>
                <WriteComment idPost={idPost}/>
            </div>
          </TabPanel>

        </Box>
      </Tabs>
      )}
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



const locationUnillanos = [
  { name: '1. Coliseo', location: 'BIENESTAR', id: 10001 },
  { name: '2. Maloca Coliseo', location: 'BIENESTAR', id: 10002 },
  { name: '3. Cancha de Fútbol', location: 'BIENESTAR', id: 10003 },
  { name: '4. Cancha de Tenis', location: 'BIENESTAR', id: 10004 },
  { name: '5. Cancha de Microfútbol y Baloncesto', location: 'BIENESTAR', id: 10005 },
  { name: '6. Piscina', location: 'BIENESTAR', id: 10006 },
  { name: '7. Maloca Pequeña Piscina', location: 'BIENESTAR', id: 10007 },
  { name: '8. Maloca Grande Piscina', location: 'BIENESTAR', id: 10008 },
  { name: '9. Cancha de Microfútbol', location: 'BIENESTAR', id: 10009 },
  { name: '10. Cancha de Fútbol', location: 'BIENESTAR', id: 10010 },
  { name: '1. Biblioteca Jorge Boshell', location: 'EDIFICIOS', id: 20001 },
  { name: '2. Torre Administrativa', location: 'EDIFICIOS', id: 20002 },
  { name: '3. Fac. Ciencias Básicas e Ingeniería', location: 'EDIFICIOS', id: 20003 },
  { name: '4. Edificio Albert Einstein', location: 'EDIFICIOS', id: 20004  },  
  { name: '5. Edificio Leonardo da Vinci', location: 'EDIFICIOS', id: 20005  },
  { name: '6. Bienestar Universitario', location: 'EDIFICIOS', id: 20006  },
  { name: '7. Almacén e Inventarios y Lab. Polifuncional de Ing. Agroindustrial', location: 'EDIFICIOS', id: 20007  },
  { name: '8. Auditorio Gustavo Pardo', location: 'EDIFICIOS', id: 20008 },
  { name: '1. Planta de Tratamiento de Agua Potable (PTAP)', location: 'INFRAESTRUCTURA_SERVICIOS', id: 30001  },
  { name: '2. Planta de Tratamiento de Aguas Residuales (PTAR)', location: 'INFRAESTRUCTURA_SERVICIOS', id: 30002  },
  { name: '3. Tanque Elevado', location: 'INFRAESTRUCTURA_SERVICIOS', id: 30003  },
  { name: '1. Entrada Posgrados', location: 'ENTRADAS', id: 40001  },
  { name: '2. Entrada Administrativos', location: 'ENTRADAS', id: 40002  },
  { name: '3. Entrada Principal', location: 'ENTRADAS', id: 40003  },
  { name: '4. Entrada Secundaria', location: 'ENTRADAS', id: 40004  },
  { name: '1. Lab. Química', location: 'BLOQUES', id: 50001  },
  { name: '2. Lab. Control Biológico, Herbario, Aulas B2-1 y B2-2', location: 'BLOQUES', id: 50002  },
  { name: '3. Aulas B3-1, B3-2, B3-3 y B3-4', location: 'BLOQUES', id: 50003  },
  { name: '4. Ingeniería Ambiental, Ingeniería de Procesos y Lab. Física', location: 'BLOQUES', id: 50004  },
  { name: '5. Lab. Suelos', location: 'BLOQUES', id: 50005  },
  { name: '6. Lab. Anatomía y Morfología Animal, Aulas B6-1 y B6-2', location: 'BLOQUES', id: 50006  },
  { name: '7. Ing. Agronómica, Ing. Agroindustrial, Lab. Microbiología Vegetal y Fitopatología y Lab. Fisiología Vegetal', location: 'BLOQUES', id: 50007  },
  { name: '8. Aulas B8-1, B8-2, B8-3 y B8-4', location: 'BLOQUES', id: 50008  },
  { name: '9. Comedor Universitario', location: 'BLOQUES', id: 50009  },
  { name: '10. División de Servicios Administrativos y PREU', location: 'BLOQUES', id: 50010  },
  { name: '11. Counillanos', location: 'BLOQUES', id: 50011  },
  { name: '12. Aulas B12-1,B12-2, B12-3 Y B12-4, APULL SINTRAUNICOL Y SINTRADES', location: 'BLOQUES', id: 500012  },
  { name: '13. Sala de Audiovisuales 1 y 2', location: 'BLOQUES', id: 50013  },
  { name: '14. Lab. Biología', location: 'BLOQUES', id: 50014  },
  { name: '15. Fac. Ciencias Humanas y de la Educación, Lab. Nutrición Animal, Lab. Histopatología y Aula specializada de Matemáticas', location: 'BLOQUES', id: 50015  },
  { name: '16. Lab. Entomología, Lab. Microbiología Animal, y Aula Especializada de Física', location: 'BLOQUES', id: 50016  },
  { name: '17. Lic. en Matemáticas, Aulas B17-1, B17-2 y B17-3', location: 'BLOQUES', id: 50017  },
  { name: '18. Aulas B18-1, B18-2 y B18-3', location: 'BLOQUES', id: 50018  },
  { name: '19. Lab. Electrónica, Lab. Biología Molecular y Museo de Historia Natural', location: 'BLOQUES', id: 50019  },
  { name: '20. Fac. Ciencias Agropecuarias y Recursos Naturales, Medicina Veterinaria y Zootecnia y Of. Archivo y Correspondencia', location: 'BLOQUES', id: 50020  },
  { name: '21. Aula B21-1, Of. SST y Centro de Salud', location: 'BLOQUES', id: 50021  },
  { name: '22. Clínica Veterinaria, Lab. Clínico Veterinario y Lab. Genética y Reproducción Animal', location: 'BLOQUES', id: 50022  },
  { name: '23. Hospitalización de Caninos y Felinos', location: 'BLOQUES', id: 50023  },
  { name: '24. Lab. Fisiología Veterinaria y Lab. Parasitología Veterinaria', location: 'BLOQUES', id: 50024  },
  { name: '25. Lab. Toxicología y Biotecnologia', location: 'BLOQUES', id: 50025  },
  { name: '26. Taller de Óptica', location: 'BLOQUES', id: 50026  },
  { name: '27. Aula B27-1 y Of. Servicios Generales', location: 'BLOQUES', id: 50027  },
  { name: '28. Salón de Gimnasia', location: 'BLOQUES', id: 50028  },
  { name: '29. Aulas B29-1 y B29-2', location: 'BLOQUES', id: 50029  },
  { name: '30. Aula', location: 'BLOQUES', id: 50030  },
  { name: '31. Lab. Biotecnología Vegetal', location: 'BLOQUES', id: 50031  },
  { name: '32. Sala de Desarrollo y Estudio Multimedia', location: 'BLOQUES', id: 50032  },
  { name: '33. Planta de Lacteos y Aula B33-1', location: 'BLOQUES', id: 50033  },
  { name: '34. Dirección IALL, Auditorio IALL y Lab. Ictiopatología', location: 'BLOQUES', id: 50034  },
  { name: '35. Lab. Reproducción y Crioconservación y Lab. Experimental de Alimentación de Peces', location: 'BLOQUES', id: 50035  },
  { name: '36. IALL Residencias', location: 'BLOQUES', id: 50036  },
  { name: '37. IALL Oficinas de Profesores', location: 'BLOQUES', id: 50037  },
  { name: '38. Unidad de Bioensayos', location: 'BLOQUES', id: 50038  },
  { name: '39. Sala de Reproducción y Alevinaje', location: 'BLOQUES', id: 50039  },
  { name: '40. Lab. Calidad de Aguas y Dinámica de Nutrientes', location: 'BLOQUES', id: 50040  },
  { name: '41. Lab. Alimento Vivo-Ecotoxicología', location: 'BLOQUES', id: 50041  },
  { name: '42. Bodega de Herramientas y de Insumos Agrícolas', location: 'BLOQUES', id: 50042  },
  { name: '43. Aula B43-1', location: 'BLOQUES', id: 50043  },
  { name: '44. Vivero', location: 'BLOQUES', id: 50044  },
  { name: '45. Dirección Unidad Rural Barcelona', location: 'BLOQUES', id: 50045  },
  { name: '46. Lab. Maquinaria y Mecanización Agrícola', location: 'BLOQUES', id: 50046  },
  { name: '47. Lab. Maquinaria y Mecanización Agrícola', location: 'BLOQUES', id: 50047  },
  { name: '48. Galpones', location: 'BLOQUES', id: 50048  },
  { name: '49. Porqueriza', location: 'BLOQUES', id: 50049  },
  { name: '50. Centro de Calidad de Aguas', location: 'BLOQUES', id: 50050  },
  { name: '51. Instituto de Investigaciones de la Orinoquia Colombiana (IIOC), Instituto de Ciencias Ambientales de la Orinoquia Colombiana (ICAOC), Secretaría Técnica de Acreditación, Oficina de Internacionalización y Aula Jorge Ortega', location: 'BLOQUES', id: 50051  },
  { name: '52. Aulas de Posgrados y Aula Bertha Lucia Buitrago', location: 'BLOQUES', id: 50052  },
  { name: '53. Aula B53-1', location: 'BLOQUES', id: 50053  },
];

