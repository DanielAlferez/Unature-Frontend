import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { Input, Textarea } from '@mui/joy';
import { FaArrowCircleRight } from 'react-icons/fa';

const WriteComment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica del envío del formulario
  };

  return (
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
      onSubmit={handleSubmit}
    >
      <Typography  level="title-lg"  align='center'>
        Escribe una Identificación
      </Typography>
      <Input
        placeholder="Nombre Común"
        variant="outlined"
        required
        fullWidth
      />
      <Input
        placeholder="Género"
        variant="outlined"
        required
        fullWidth
      />
      <Input
        placeholder="Especie"
        variant="outlined"
        required
        fullWidth
      />
      <Textarea 
        minRows={3}
        placeholder="Información Adicional"
        variant="outlined"
        multiline
        fullWidth
      />
      <Button endDecorator={<FaArrowCircleRight />} color="success" variant='soft'>
        Sugerir
      </Button>
    </Box>
  );
};

export default WriteComment;
