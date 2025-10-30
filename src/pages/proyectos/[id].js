import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import projects from "../../utils/projects.json";
import styles from "./project.module.css";
import SEO from "../../components/SEO";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import ImageModal from '../../components/Proyectos/ImageModal'

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    const pid = parseInt(id, 10);
    const found = projects.find((p) => p.id === pid);

    // Simular carga para mejor UX
    const timer = setTimeout(() => {
      setProject(found || null);
      setCurrentIndex(0);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const pageTitle = project ? `Legno Haus | ${project.title}` : "Legno Haus";

  const images = project?.images || [];

  const [isZoomOpen, setIsZoomOpen] = useState(false)

  const openZoom = useCallback(() => {
    setIsZoomOpen(true)
  }, [])

  const closeZoom = useCallback(() => {
    setIsZoomOpen(false)
  }, [])

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Estados de carga
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando proyecto...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto que buscas no existe o ha sido removido.</p>
        <button
          onClick={() => router.push("/proyectos")}
          className={styles.backButton}
        >
          Volver a proyectos
        </button>
      </div>
    );
  }

  return (
    <>
      {/* <Navbar2 /> */}
      <SEO
        title={pageTitle}
        description={project.og_description || "Proyecto Legno Haus"}
        image={project.images?.[0]}
        canonical={`${
          process.env.NEXT_PUBLIC_SITE_URL || "https://legno-haus.example"
        }/proyectos/${project.id}`}
      />

      <main className={styles.projectPage}>

        <div className={styles.content}>
          <div>
            {/* Sección del carrusel */}
            <section
              className={styles.carouselSection}
              aria-label="Galería de imágenes del proyecto"
            >
              <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                  <div className={styles.carouselTrack}>
                    <Image
                      src={images[currentIndex]}
                      alt={`${project.title} - Imagen ${currentIndex + 1} de ${
                        images.length
                      }`}
                      width={800}
                      height={500}
                      className={styles.carouselImage}
                      priority={currentIndex === 0}
                    />
                  </div>

                  {/* Overlay: título y descripción sobre margen inferior izquierdo del carrusel */}
                  <div className={styles.carouselOverlay}>
                    <div className={styles.carouselOverlayInner}>
                      <h3 className={styles.overlayTitle}>{project.title}</h3>
                      {(project.subtitle || project.description) && (
                        <p className={styles.overlayDescription}>
                          {project.subtitle || project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Controles de navegación: flechas en margen derecho (vertical) */}
                  {images.length > 1 && (
                    <div className={styles.sideControls} >
                      <div className={styles.linePager} aria-hidden>
                        <div className={styles.linePagerInner}>
                          {images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`${styles.dot} ${
                                idx === currentIndex ? styles.dotActive : ""
                              }`}
                            />
                          ))}
                        </div>
                        <div className={styles.arrows}>
                          <button
                            onClick={handlePrevious}
                            aria-label="Imagen anterior"
                            className={styles.navButton}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={handleNext}
                            aria-label="Siguiente imagen"
                            className={styles.navButton}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                  )}
                  {/* Zoom modal trigger */}
                  <button
                    className={styles.zoomButton}
                    onClick={openZoom}
                    aria-label="Ampliar imagen"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2"/>
                      <path d="M11 8v3l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Modal: usar componente existente */}
                  <ImageModal
                    isOpen={isZoomOpen}
                    onClose={closeZoom}
                    imageUrl={images[currentIndex]}
                    title={project.title}
                  />
                </div>
              </div>
            </section>
          </div>
          
               <div>sdfsdfsf</div>

        </div>

      </main>
      {/* <Footer /> */}
    </>
  );
};

export default ProjectPage;
