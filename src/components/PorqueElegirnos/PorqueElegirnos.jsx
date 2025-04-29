'use client'

import { useState} from 'react'
import { useBreakpoint } from '../../../Hook/useBreakpoint'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './porqueElegirnos.css'

const PorqueElegirnos = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState(2)
  const brackpoint = useBreakpoint()

  const options = [
    {id: 1, img: '/house1.png' , title:'Innovación',  description: 'En LegnoHaus, no solo construimos viviendas, creamos soluciones sostenibles, flexibles y accesibles. Cada módulo está diseñado para ofrecer calidad de vida, asegurando un hogar que evoluciona con vos. '},
    {id: 2, img:'/house1.png' , title:'Sustentabilidad',  description: 'Utilizamos madera certificada, un recurso naturalmente renovable y de bajo impacto ambiental. Apostamos por la construcción responsable, optimizando materiales, sin desperdicios y reduciendo la huella ecológica, para que cada hogar sea sinónimo de armonía con el entorno.'},
    {id: 3, img: '/home.png' , title:'Funcionalidad',  description: 'Cada espacio está pensado para brindar confort, optimización del área y una experiencia de vida moderna, asegurando que tu hogar te acompañe en cada etapa de tu vida y la de tu familia.'},
    {id: 4, img: '/home.png' , title:'Construcción transparente ',  description: 'Eliminamos los tiempos de obra prolongados e imprevistos. Gracias a un proceso de pre- fabricación garantizamos rapidez, costos controlados y una experiencia sin complicaciones.'},
    {id: 5, img: '/home.png' , title:'Impacto social y comunitario',  description: 'Elegir LegnoHaus es ser parte de un cambio. No solo revitalizamos barrios y mejoramos el acceso a viviendas de calidad, sino que promovemos comunidades más sostenibles y con identidad propia.'},
    {id: 6, img: '/home.png' , title:'Acompañamiento personalizado ',  description: 'Desde el primer contacto hasta la entrega de tu hogar, te guiamos en cada etapa. Nos encargamos de los detalles para que tu única preocupación sea disfrutar tu nuevo hogar.'},
  ]



  const toggleDescription = (id) => {
    console.log(id, "ide antes del")
    if (id === visibleDescriptions) {
      if (id === options[options.length - 1].id) {
        setVisibleDescriptions(options[options.length - 2].id)
      } else {
        setVisibleDescriptions(options[options.length - 1].id)
      }
    } else {
      setVisibleDescriptions(id)
    }
  };


  return (
    <div className='f-models-main-container'>
      <div className='featured-models-content-container'>
        {/* <h1 className='featured-models-title'>¿ Por qué <span style={{fontWeight: 'bold',color: 'var(--main-orange)'}}>elegirnos</span> ?</h1> */}
        <div className='section-header'>
          <h2 className='section-title'>
            ¿Por qué <span className='highlight'>elegirnos</span>?
          </h2>
          <p className='section-subtitle'>Descubrí lo que nos hace diferentes</p>
        </div>
      
        <div className='featured-models-wrapper'>
          {brackpoint === 'mobile' ? (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView="auto"
              
              className='models-swipper'
              style={{
                '--swiper-pagination-color': '#545D47',
                '--swiper-pagination-bullet-size': '10px',
                '--swiper-pagination-bullet-horizontal-gap': '6px'
              }}
            >
              {options.map((option, index) => (
                <SwiperSlide key={index}>
                  <div className='featured-model-card-mobile'
                  >

                    <div className='featured-models-images-container' >
                      <Image
                        src={option.img}
                        alt='house'
                        width={100}
                        height={100}
                        className='featured-models-images'
                      />
                    </div>
                    <div className="featured-models-description-container" style={{ marginTop: '1rem' }}>
                <p className='feature-models-content-title'>{option.title}</p>
                      <div className="feature-models-content">
                        <p className="feature-models-house-description">{option.description}</p>
                       
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            options?.map((option, index, arr) => {
              const isExpanded = option.id === visibleDescriptions;
              const selectedIndex = arr.findIndex(h => h.id === visibleDescriptions);
              const isPrevToExpanded =
                (selectedIndex > 0 && index === selectedIndex - 1) ||
                (selectedIndex === 0 && index === 1);

              return (
                <div key={option.id} className='featured-model-card-container'>
                  <div
                    className={`featured-models-images-container ${isExpanded ? 'expanded' : isPrevToExpanded ? 'adjacent2' : 'adjacent'}`}
                  >
                    <Image
                      src={option.img}
                      fill='auto'
                      alt='option'
                      className='featured-models-images'
                      onClick={() => toggleDescription(option.id)}
                    />
                     {!isExpanded && (
    <div className="image-title-overlay">
      <p>{option.title}</p>
    </div>
  )}
                    <button
                      className='toggle-btn'
                      onClick={() => toggleDescription(option.id)}
                    >
                      {option.id === visibleDescriptions ? '−' : '+'}
                    </button>
                  </div>
                  {visibleDescriptions === option.id && (
                    <div className="featured-models-description-container">
             
                      <div className="feature-models-content">
                       
                        <p className='feature-models-content-title'>{option.title}</p>
                        <div>
                          <p className="feature-models-house-description">{option.description}</p>
                        </div>
                       
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default PorqueElegirnos
