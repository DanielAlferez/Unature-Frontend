import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Layout from "../../HomeLayout/HomeLayout"
import { BsPostcard } from "react-icons/bs";
import { BsPostcardHeart } from "react-icons/bs";
import { BsFilePost } from "react-icons/bs";
import {obs} from "../../data"
import CardPost from '../Explorar/CardPost';

export default function UserCard() {
  return (
    <Layout>
      <div className='p-10 md:p-20'>
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          overflow: { xs: 'auto', sm: 'initial' },
        }}
      >
        <Card
          orientation="horizontal"
          sx={{
            width: '100%',
            flexWrap: 'wrap',
            alignItems: 'center',
            [`& > *`]: {
              '--stack-point': '500px',
              minWidth:
                'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
            },
            // make the card resizable for demo
            overflow: 'auto',
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              Daniel Alferez
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              Programa: Ingeniería de Sistemas
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              Correo: dcalferez@unillanos.edu.co
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              Semestre: Noveno
            </Typography>
            <Box
              sx={{
                bgcolor: 'background.level1',
                borderRadius: 'sm',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                '& > div': { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" fontWeight="lg" >
                  <div className='flex items-center gap-1 mb-2'>
                    <BsFilePost size={17}/> Publicaciones 
                  </div>
                </Typography>
                <Typography fontWeight="lg">100</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                <div className='flex items-center gap-1 mb-2'>
                    <BsPostcard size={17}/> Identificaciones 
                </div>
                </Typography>
                <Typography fontWeight="lg">12</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  <div className='flex items-center gap-1 mb-2'>
                      <BsPostcardHeart size={17}/> Aprobaciones 
                  </div>
                </Typography>
                <Typography fontWeight="lg">50</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <div className='border p-10 flex flex-wrap gap-20 justify-center rounded-xl my-10'>
              {obs.map((post, index)=>(
                <CardPost key={index} id={post.publicacion_id} image={post.imagen} comments={post.comentarios} commonname={post.nombre_comun} likes={post.likes} username={post.nombre_usuario}/>
              ))}
      </div>
      </div>
    </Layout>
  );
}