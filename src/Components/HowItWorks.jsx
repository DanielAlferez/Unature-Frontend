import { Card, CardCover, Chip } from '@mui/joy';
import React from 'react';
import { FaCamera, FaCloud, FaCloudUploadAlt, FaComment, FaHandPointRight } from 'react-icons/fa';
import VIDEO from "../assets/video1.mp4"

const HowItWorks = () => {
  return (
    <div className="px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">¿Cómo Funciona?</h2>
        <div className="flex flex-col md:flex-row items-center justify-between my-12">
          <StepCard
            stepNumber={1}
            title="Captura de Imágenes"
            description="Utiliza la aplicación para capturar imágenes detalladas de la vida silvestre en el campus Barcelona."
            icon={<FaCamera className="text-4xl text-blue-500" />}
          />

          <StepCard
            stepNumber={2}
            title="Comparte tus Observaciones"
            description="Sube tus imágenes a la plataforma de forma sencilla y comparte detalles sobre la ubicación, fecha y cualquier observación relevante."
            icon={<FaCloudUploadAlt className="text-4xl text-purple-500" />}
          />

          <StepCard
            stepNumber={3}
            title="Participa en Conversaciones"
            description="Conecta con otros entusiastas de la naturaleza y expertos. Comenta en observaciones, comparte conocimientos y colabora en identificaciones."
            icon={<FaComment className="text-4xl text-pink-500" />}
          />
        </div>
        <Card component="li" sx={{ width: screen, flexGrow: 1, height: 200 }}>
            <CardCover>
            <video autoPlay loop muted>
                <source src={VIDEO} type="video/mp4"/>
            </video>
            </CardCover>
        </Card>
        <div className='flex justify-center mt-10'>
          <p className="text-darkGreen text-md max-w-5xl text-center font-thin ">"Nuestra plataforma proporciona una experiencia intuitiva y profesional para que puedas contribuir a la comprensión y preservación de la biodiversidad en el campus Barcelona de la Universidad de los Llanos."</p>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ stepNumber, title, description, icon }) => (
  <div className="flex-1 md:w-1/3 p-6 bg-white rounded-lg shadow-xl mb-4 md:mb-0 ">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-lightGreen rounded-full">
        <span className="text-darkGreen font-bold text-lg">{stepNumber}</span>
      </div>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default HowItWorks;
