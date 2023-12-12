import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import { FaComment, FaExclamation, FaHeart } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { CgDanger } from "react-icons/cg";
import { useDeletePostMutation } from '../../features/Api/postApiSlice';

export default function CardPost({id, username, commonname, image, likes, comments, userId, admin=false}) {

  const [deletePost, {data, isSuccess}] = useDeletePostMutation()

  return (
    <Card
      variant="plain"
      sx={{
        width: 350,
        bgcolor: 'initial',
        p:0,
      }}
    >
      <RouterLink to={`/explorar/publicacion/${id}`}>
        <Box sx={{ position: 'relative' }}>
          <AspectRatio ratio="4/3">
              <img
                src={image}
                loading="lazy"
                alt="Yosemite by Casey Horner"
              />
          </AspectRatio>
          <CardCover
            className="gradient-cover"
            sx={{
              '&:hover, &:focus-within': {
                opacity: 1,
              },
              opacity: 0,
              transition: '0.1s ease-in',
              background:
                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
            }}
          >
            {/* The first box acts as a container that inherits style from the CardCover */}
            <div>
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  flexGrow: 1,
                  alignSelf: 'flex-end',
                }}
              >
                <Typography level="h2" noWrap sx={{ fontSize: 'md' }}>
                  <RouterLink to={`/explorar/publicacion/${id}`} className='text-white w-20 hover:underline'> 
                    <p className='flex w-64'>
                      {commonname ?? 'Sin Identificar'} 
                    </p>
                  </RouterLink>
                </Typography>
              </Box>
            </div>
          </CardCover>
        </Box>
      </RouterLink>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
          size="sm"
          sx={{ '--Avatar-size': '1.5rem' }}
        />
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          <RouterLink to={`/comunidad/perfil/${userId}`} className='hover:underline'>{username}</RouterLink>
        </Typography>
        
        <Link
          level="body-xs"
          underline="none"
          startDecorator={<FaHeart />}
          sx={{
            fontWeight: 'md',
            ml: 'auto',
            color: 'danger.plainColor',
          }}
        >
          {likes}
        </Link>
        <Link
          level="body-xs"
          underline="none"
          startDecorator={<FaComment />}
          sx={{
            fontWeight: 'md',
            color: 'primary.plainColor',
          }}
        >
          {comments}
        </Link>
         </Box>
          <Box className='flex justify-between items-center'>
            {commonname ? (
              <Chip
              variant="soft"
              color="success"
              size="sm"
            >
              Identificado
            </Chip>
            ) : (
              <Chip
                variant="soft"
                color="danger"
                size="sm"
              >
                Sin Identificar
              </Chip>
            )}


            {
              admin && (
                <button onClick={() => deletePost(id)}>
                  <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<CgDanger />}
                  sx={{
                    fontWeight: 'lg',
                    color: 'danger.plainColor',
                  }}
                >Eliminar</Link>
                </button>
              )
              }
          </Box>
    </Card>
  );
}