import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import projects from '../../utils/projects.json'
import styles from './project.module.css'
import SEO from '../../components/SEO'
import Navbar2 from '../../components/Navbar2/Navbar2'
import Footer from '../../components/Footer/Footer'

const ProjectPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    
    setIsLoading(true)
    const pid = parseInt(id, 10)
    const found = projects.find((p) => p.id === pid)
    
    // Simular carga para mejor UX
    const timer = setTimeout(() => {
      setProject(found || null)
      setCurrentIndex(0)
      setIsLoading(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [id])

  const pageTitle = project ? `Legno Haus | ${project.title}` : 'Legno Haus'

  const images = project?.images || []

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToImage = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  // Estados de carga
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando proyecto...</p>
      </div>
    )
  }

  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto que buscas no existe o ha sido removido.</p>
        <button 
          onClick={() => router.push('/proyectos')}
          className={styles.backButton}
        >
          Volver a proyectos
        </button>
      </div>
    )
  }

  return (
    <>
      <Navbar2 />
      <SEO
        title={pageTitle}
        description={project.og_description || 'Proyecto Legno Haus'}
        image={project.images?.[0]}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://legno-haus.example'}/proyectos/${project.id}`}
      />
      
      <main className={styles.projectPage}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          {project.subtitle && (
            <p className={styles.subtitle}>{project.subtitle}</p>
          )}
        </header>

        <div className={styles.content}>
          <div style={{margin:'0 auto'}}>

          {/* Sección del carrusel */}
          <section className={styles.carouselSection} aria-label="Galería de imágenes del proyecto">
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div className={styles.carouselTrack}>
                  <Image
                    src={images[currentIndex]}
                    alt={`${project.title} - Imagen ${currentIndex + 1} de ${images.length}`}
                    width={800}
                    height={500}
                    className={styles.carouselImage}
                    priority={currentIndex === 0}
                    />
                </div>

                {/* Controles de navegación */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevious}
                      aria-label="Imagen anterior"
                      className={`${styles.navButton} ${styles.prev}`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <button
                      onClick={handleNext}
                      aria-label="Siguiente imagen"
                      className={`${styles.navButton} ${styles.next}`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                )}

                {/* Contador de imágenes */}
                {images.length > 1 && (
                  <div className={styles.imageCounter}>
                    {currentIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Miniaturas */}
              {images.length > 1 && (
                <div className={styles.thumbnails}>
                  {images.map((src, index) => (
                    <button
                    key={src}
                    onClick={() => goToImage(index)}
                    className={`${styles.thumbnail} ${index === currentIndex ? styles.thumbnailActive : ''}`}
                    aria-label={`Ver imagen ${index + 1}`}
                      aria-current={index === currentIndex}
                      >
                      <Image 
                        src={src} 
                        alt={`Miniatura ${index + 1}`} 
                        width={80} 
                        height={60} 
                        className={styles.thumbnailImage}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Información del proyecto */}
          <aside className={styles.projectInfo}>
            <div className={styles.infoCard}>
              <h2>Descripción del Proyecto</h2>
              <div className={styles.description}>
                {project.description}
              </div>
              
              {/* Metadatos adicionales */}
              {(project.location || project.year || project.category) && (
                <div className={styles.metadata}>
                  {project.location && (
                    <div className={styles.metaItem}>
                      <strong>Ubicación:</strong> {project.location}
                    </div>
                  )}
                  {project.year && (
                    <div className={styles.metaItem}>
                      <strong>Año:</strong> {project.year}
                    </div>
                  )}
                  {project.category && (
                    <div className={styles.metaItem}>
                      <strong>Categoría:</strong> {project.category}
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>
                  </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProjectPage