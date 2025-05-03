import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

const items = [
  { title: 'Residencias', image: '/background.jpeg' },
  { title: 'Desarrollo Inmobiliario', image: '/room.jpeg' },
  { title: 'Turismo', image: '/house-beach.jpeg' },
  { title: 'Oficinas', image: '/living.jpeg' },
  { title: 'Aire Libre', image: '/techo.jpeg' },
  { title: 'Viviendas sociales', image: '/house-inmo.jpeg' },
];

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  const openModal = (image, title) => {
    setSelectedProject({ image, title });
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
                <button 
                  className="proyecto-btn"
                  onClick={() => openModal(item.image, item.title)}
                >
                  Ver proyecto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        imageUrl={selectedProject?.image || ''}
        title={selectedProject?.title || ''}
      />
    </section>
  );
};

export default Proyectos;