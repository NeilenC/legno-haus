import React, { useEffect, useState, useCallback } from "react";
import { useBreakpoint } from "../../../Hook/useBreakpoint";
import { useRouter } from "next/router";
import Image from "next/image";
import projects from "../../utils/projects.json";
import styles from "./project.module.css";
import SEO from "../../components/SEO";
import Footer from "@/components/Footer/Footer";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    const pid = parseInt(id, 10);
    const found = projects.find((p) => p.id === pid);

    const timer = setTimeout(() => {
      setProject(found || null);
      setCurrentIndex(0);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const pageTitle = project ? `Legno Haus | ${project.title}` : "Legno Haus";

  const images =
    breakpoint === "mobile"
      ? project?.mobileImages || project?.images || []
      : project?.images || [];

  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

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
          <section
            className={styles.carouselSection}
            aria-label="Galería de imágenes del proyecto"
          >
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div className={styles.carouselTrack}>
                  <Image
                    src={images[currentIndex]}
                    alt={`${project.title} - Imagen ${currentIndex + 1}`}
                    width={800}
                    height={500}
                    className={styles.carouselImage}
                    priority={currentIndex === 0}
                    onClick={() => setIsZoomOpen(true)} // 👈 también abre el zoom al hacer clic
                    style={{ cursor: "zoom-in" }}
                  />
                </div>

                {images.length > 1 && (
                  <div className={styles.sideControls}>
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

                <button
                  className={styles.zoomButton}
                  onClick={() => setIsZoomOpen(true)}
                  aria-label="Ampliar imagen"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 21l-4.35-4.35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M11 8v3l2 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* 👇 Lightbox con zoom */}
                <Lightbox
                  open={isZoomOpen}
                  close={() => setIsZoomOpen(false)}
                  index={currentIndex}
                  slides={images.map((img) => ({ src: img }))}
                  plugins={[Zoom]}
                  zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 1.5,
                  }}
                />
              </div>

              <div className={styles.carouselOverlay}>
                <h3 className={styles.overlayTitle}>{project.title}</h3>
              </div>
            </div>
          </section>

          <div className={styles.overlayDescription}>
            {(project.subtitle || project.description) && (
              <p>{project.subtitle || project.long_description}</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
