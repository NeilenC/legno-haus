'use client'

import { useState } from 'react'
import { useBreakpoint } from '../../../Hook/useBreakpoint'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './porqueElegirnos.module.css'

const PorqueElegirnos = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState(2)
  const brackpoint = useBreakpoint()

  const options = [
    {id: 1, img: '/background.jpeg' , title:'Innovación',  description: 'En LegnoHaus, no solo construimos viviendas, creamos soluciones sostenibles, flexibles y accesibles. Cada módulo está diseñado para ofrecer calidad de vida, asegurando un hogar que evoluciona con vos. '},
    {id: 2, img:'/home-background.jpeg' , title:'Sustentabilidad',  description: 'Utilizamos madera certificada, un recurso naturalmente renovable y de bajo impacto ambiental. Apostamos por la construcción responsable, optimizando materiales, sin desperdicios y reduciendo la huella ecológica, para que cada hogar sea sinónimo de armonía con el entorno.'},
    {id: 3, img: '/background.jpeg' , title:'Funcionalidad',  description: 'Cada espacio está pensado para brindar confort, optimización del área y una experiencia de vida moderna, asegurando que tu hogar te acompañe en cada etapa de tu vida y la de tu familia.'},
    {id: 4, img: '/background.jpeg' , title:'Construcción transparente ',  description: 'Eliminamos los tiempos de obra prolongados e imprevistos. Gracias a un proceso de pre- fabricación garantizamos rapidez, costos controlados y una experiencia sin complicaciones.'},
    {id: 5, img: '/home-background.jpeg' , title:'Impacto social y comunitario',  description: 'Elegir LegnoHaus es ser parte de un cambio. No solo revitalizamos barrios y mejoramos el acceso a viviendas de calidad, sino que promovemos comunidades más sostenibles y con identidad propia.'},
    {id: 6, img: '/home-background.jpeg' , title:'Acompañamiento personalizado ',  description: 'Desde el primer contacto hasta la entrega de tu hogar, te guiamos en cada etapa. Nos encargamos de los detalles para que tu única preocupación sea disfrutar tu nuevo hogar.'},
  ]

  const toggleDescription = (id) => {
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
    <div id='porque-elegirnos' className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            ¿Por qué <span className={styles.highlight}>elegirnos</span>?
          </h2>
          <p className={styles.sectionSubtitle}>Descubrí lo que nos hace diferentes</p>
        </div>
      
        <div className={styles.modelsWrapper}>
          {brackpoint === 'mobile' ? (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView="auto"
              className={styles.swiperContainer}
              style={{
                '--swiper-pagination-color': '#545D47',
                '--swiper-pagination-bullet-size': '10px',
                '--swiper-pagination-bullet-horizontal-gap': '6px'
              }}
            >
              {options.map((option, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.mobileCard}>
                    <div className={styles.imagesContainer}>
                      <Image
                        src={option.img}
                        alt='house'
                        width={100}
                        height={100}
                        className={styles.modelImage}
                      />
                    </div>
                    <div className={styles.descriptionContainer} style={{ marginTop: '1rem' }}>
                      <p className={styles.contentTitle}>{option.title}</p>
                      <div className={styles.modelContent}>
                        <p className={styles.houseDescription}>{option.description}</p>
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
                <div key={option.id} className={styles.modelCardContainer}>
                  <div
                    className={`${styles.imagesContainer} ${
                      isExpanded ? styles.imagesContainerExpanded : 
                      isPrevToExpanded ? styles.imagesContainerAdjacent2 : styles.imagesContainerAdjacent
                    }`}
                    onClick={() => toggleDescription(option.id)}
                  >
                    <Image
                      src={option.img}
                      fill='auto'
                      alt='option'
                      className={styles.modelImage}
                    />
                    {!isExpanded && (
                      <div className={styles.imageTitleOverlay}>
                        <p>{option.title}</p>
                      </div>
                    )}
                    <button
                      className={styles.toggleButton}
                      onClick={() => toggleDescription(option.id)}
                    >
                      {option.id === visibleDescriptions ? '−' : '+'}
                    </button>
                  </div>
                  {visibleDescriptions === option.id && (
                    <div className={styles.descriptionContainer}>
                      <div className={styles.modelContent}>
                        <p className={styles.contentTitle}>{option.title}</p>
                        <div>
                          <p className={styles.houseDescription}>{option.description}</p>
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