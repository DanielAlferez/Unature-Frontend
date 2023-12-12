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
import { useCreateApproveMutation } from '../../features/Api/postApiSlice';

export default function ShowComment({name, common_name, genus, sp, info, like=0, idenId}) {

    const [aprove, setAprove] = React.useState(false)
    const [likes, setLikes] = React.useState(like)
    const id = localStorage.getItem("id")

    const [giveLike, {isSuccess}] = useCreateApproveMutation()

    const handleSubmit = () => {
        const formData = {
          "id_identificacion": parseInt(idenId), // Reemplaza con el valor correcto
          "id_usuario": parseInt(id), // Reemplaza con el valor correcto
        };
        window.location.reload();
        giveLike(formData);
    };
  

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
        <Typography level="title-lg">{name}</Typography>
        <div className='flex gap-2 px-2 ml-auto items-center'>
          {likes} <FaHeart className='text-darkRed'/>
        </div>  
      </Box>
      <CardContent>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Nombre Común:</Typography>
            <Typography level="body-sm">
                {common_name}
            </Typography>
        </div>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Genero:</Typography>
            <Typography level="body-sm">
                {genus}
            </Typography>
        </div>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Especie:</Typography>
            <Typography level="body-sm">
                {sp}
            </Typography>
        </div>
        <div className='flex flex-wrap gap-1'>
            <Typography level="title-sm">Información:</Typography>
            <Typography level="body-sm">
                {info}
            </Typography>
        </div>
      </CardContent>
      <CardActions className='ml-auto'>
        
            <Button onClick={() => {handleSubmit(), setAprove(true), setLikes(likes+1)}} variant="soft" color="primary" className='flex gap-2'>
                Aprobar <FaHeart />
            </Button>


      </CardActions>
    </Card>
  );
}