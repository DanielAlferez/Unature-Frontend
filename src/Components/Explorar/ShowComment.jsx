import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

export default function ShowComment() {

    const [aprove, setAprove] = React.useState(false)
    const [likes, setLikes] = React.useState(3)

  return (
    <Card
      variant="outlined"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Avatar src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" size="lg" />
        <Typography level="title-lg">Daniel Alférez</Typography>
        <div className='flex gap-2 px-2 ml-auto items-center'>
          {likes} <FaHeart className='text-darkRed'/>
        </div>  
      </Box>
      <CardContent>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Nombre Común:</Typography>
            <Typography level="body-sm">
                Hormiga Bala
            </Typography>
        </div>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Genero:</Typography>
            <Typography level="body-sm">
                Paraponera
            </Typography>
        </div>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Especie:</Typography>
            <Typography level="body-sm">
                Clavata
            </Typography>
        </div>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Información:</Typography>
            <Typography level="body-sm">
                Tiene una picadura muy fuerte, tener cuidado!
            </Typography>
        </div>
      </CardContent>
      <CardActions className='ml-auto'>
        {aprove ? (
            <Button onClick={() => {setAprove(false), setLikes(likes-1)}} variant="soft" color="danger" className='flex gap-2'>
                Dejar de Aprobar <FaHeartBroken />
            </Button>
        ) : (
            <Button onClick={() => {setAprove(true), setLikes(likes+1)}} variant="soft" color="primary" className='flex gap-2'>
                Aprobar <FaHeart />
            </Button>
        )}


      </CardActions>
    </Card>
  );
}