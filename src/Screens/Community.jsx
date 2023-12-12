import React from 'react';
import Layout from '../HomeLayout/HomeLayout';
import { useGetUsersQuery } from '../features/Api/userApiSlice';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';

function Community() {
    const { data, isSuccess } = useGetUsersQuery();
    console.log(isSuccess && data);

    // Filtrar usuarios con id_rol igual a 2
    const filteredUsers = isSuccess ? data.filter(user => user.id_rol === 2) : [];

    return (
        <Layout>
            <div className='pt-20'>
                <h1 className='flex justify-center text-3xl font-bold'>Nuestra Comunidad</h1>
                <div className='flex p-20 gap-5 flex-wrap justify-center'>
                    {filteredUsers.map(user => (
                        <Card orientation="horizontal" variant="outlined" sx={{ width: 400 }}>
                            <CardContent>
                            <Typography fontWeight="md" textColor="success.plainColor">
                                {user.nombre_usuario}
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Programa: {user.programa}
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Correo: {user.correo_usuario}
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Semestre: {user.semestre}
                            </Typography>
                            </CardContent>
                            
                                <CardOverflow
                                variant="soft"
                                color="primary"
                                sx={{
                                    px: 0.2,
                                    writingMode: 'vertical-rl',
                                    textAlign: 'center',
                                    fontSize: 'xs',
                                    fontWeight: 'xl',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    borderLeft: '1px solid',
                                    borderColor: 'divider',
                                }}
                                >
                                <Link to={`/comunidad/perfil/${user.id_user}`} className='flex justify-center items-center'>Ver Más...</Link>
                                </CardOverflow>
                            
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Community;
