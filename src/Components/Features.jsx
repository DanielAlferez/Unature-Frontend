import React from 'react'
import { FaLeaf, FaFlask, FaUsers, FaTree, FaGraduationCap, FaCalendar } from 'react-icons/fa';
import celular from "../assets/Celular.png"

function Features() {

    const FeatureCard = ({ title, description, icon: Icon }) => (
        <div className='cardHome'>
            <div className="box">
                <div className='flex flex-col justify-center items-center h-52'>
                    <Icon className="text-4xl mb-4 text-lightGreen" /> 
                    <h2 className="text-lg font-semibold mb-2 text-darkGreen">{title}</h2>
                    <p className="text-gray-600 text-center">{description}</p>
                </div>
            </div>
        </div>
      );
      
        const featureItems = [
        {
            title: 'Explora la Biodiversidad Local',
            description: 'Descubre y documenta la rica biodiversidad en el campus Barcelona de la Universidad de los Llanos.',
            icon: FaLeaf,
        },

        {
            title: 'Conéctate con la Comunidad Universitaria',
            description: 'Establece conexiones con otros estudiantes, profesores y expertos en biología para enriquecer tu experiencia.',
            icon: FaUsers,
        },
        {
            title: 'Fomenta la Conservación en el Campus',
            description: 'Colabora en iniciativas de conservación para preservar el entorno natural del campus y sus alrededores.',
            icon: FaTree,
        },
        {
            title: 'Aprende sobre la Flora Local',
            description: 'Amplía tus conocimientos sobre la flora autóctona de la región a través de interacciones con expertos y compañeros.',
            icon: FaGraduationCap,
        },

        ];

  return (
        <div className="container mx-auto p-20 text-center">
                <h1 className="text-4xl font-bold mt-10">La Naturaleza al Alcance de tu Mano</h1>
                <div className='flex justify-center -mt-10'> 
                    <img src={celular} alt="" className='rounded-xl h-96 mb-10 '/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {featureItems.map((item, index) => (
                    <FeatureCard key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))}
                </div>
            </div>
  )
}

export default Features