import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { Input, Textarea } from '@mui/joy';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useCreateIdentifyMutation } from '../../features/Api/postApiSlice';

const WriteComment = ({ showButton = true, idPost }) => {
  const [commonName, setCommonName] = useState('');
  const [genus, setGenus] = useState('');
  const [species, setSpecies] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const id = localStorage.getItem("id")

  const [write, {data, isSuccess}] = useCreateIdentifyMutation()

  const handleSubmit = async (e) => {

    try {
      // Aquí puedes manejar la lógica del envío del formulario con los valores almacenados en el estado
      const formData = {
        "especie": species,
        "genero": genus,
        "nombre_comun": commonName,
        "informacion_adicional": additionalInfo,
        "id_publicacion": parseInt(idPost), // Reemplaza con el valor correcto
        "id_usuario": parseInt(id), // Reemplaza con el valor correcto
      };

      const response = await write(formData);

      // Manejar la respuesta, por ejemplo, imprimir la respuesta en la consola
      console.log('Respuesta de la mutación:', response);

      // Limpia los campos después del envío exitoso
      setCommonName('');
      setGenus('');
      setSpecies('');
      setAdditionalInfo('');
    } catch (error) {
      // Manejar errores, por ejemplo, imprimir el error en la consola
      console.error('Error al enviar la mutación:', error);
    }
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
      <Typography level="title-lg" align='center'>
        Escribe una Identificación
      </Typography>
      <Input
        placeholder="Nombre Común"
        variant="outlined"
        required
        fullWidth
        value={commonName}
        onChange={(e) => setCommonName(e.target.value)}
      />
      <Input
        placeholder="Género"
        variant="outlined"
        required
        fullWidth
        value={genus}
        onChange={(e) => setGenus(e.target.value)}
      />
      <Input
        placeholder="Especie"
        variant="outlined"
        required
        fullWidth
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <Textarea
        minRows={3}
        placeholder="Información Adicional"
        variant="outlined"
        multiline
        fullWidth
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
      {showButton && (
        <Button endDecorator={<FaArrowCircleRight />} color="success" variant='soft' type="submit">
          Sugerir
        </Button>
      )}
    </Box>
  );
};

export default WriteComment;
