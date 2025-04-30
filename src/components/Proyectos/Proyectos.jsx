// components/Proyectos.tsx
import React from 'react';
import Image from 'next/image';

const items = [
  { title: 'Residencias', image: '/background.jpeg' },
  { title: 'Desarrollo Inmobiliario', image: '/house-inmo.jpeg' },
  { title: 'Turismo', image: '/room.jpeg' },
  { title: 'Oficinas', image: '/living.jpeg' },
  { title: 'Aire Libre', image: '/house-beach.jpeg' },
  { title: 'Viviendas sociales', image: '/techo.jpeg' },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className='proyectos-section'>
      <div className="section-header">
        <h2 className='section-subtitle'>NUESTROS PROYECTOS</h2>
        <h1 className='proyectos-title'>
          Más que construir casas, <span>creamos legados</span>
          <br />
          Hogares modernos, barrios revitalizados
          <br />
          <span>y un futuro sustentable</span>
        </h1>
      </div>
      
      <div className="proyectos-container">
        {items.map((item, index) => (
          <div key={index} className="proyecto-item">
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={400}
                className="proyecto-image"
              />
            </div>
            <div className="overlay">
              <div className="overlay-content">
                <h3>{item.title}</h3>
                <button className="proyecto-btn">Ver proyecto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;