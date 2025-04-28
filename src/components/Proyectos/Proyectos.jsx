// components/Proyectos.tsx
import React from 'react';
import Image from 'next/image';
import './proyectos.css'; // Importamos el CSS normal

const items = [
  { title: 'Residencias', image: '/home.png' },
  { title: 'Desarrollo Inmobiliario', image: '/home2.jpg' },
  { title: 'Turismo', image: '/home2.jpeg' },
  { title: 'Oficinas', image: '/house1.png' },
  { title: 'Aire Libre', image: '/home-background.jpeg' },
  { title: 'Viviendas sociales', image: '/house1.png' },
];

const Proyectos = () => {
  return (
    <div id="proyectos" className='proyectos-section'>
      <h1 className='proyectos-title'>Más que construir casas, en Legno Haus impulsamos un cambio: <br/>
      hogares modernos, barrios revitalizados y un futuro más sustentable.</h1>
      <div className="proyectos-container">

      {items.map((item, index) => (
        <div key={index} className="proyecto-item">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={400}
            className="proyecto-image"
            />
          <div className="overlay">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Proyectos;
