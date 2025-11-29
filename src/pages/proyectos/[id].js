import React, { useEffect, useState, useCallback } from "react";
import { useBreakpoint } from "../../../Hook/useBreakpoint";
import { useRouter } from "next/router";
import Image from "next/image";
// import "./projectStyles.css";
import projects from "../../utils/projects.json";
import SEO from "../../components/SEO";
import Footer from "@/components/Footer/Footer";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import ProjectDescription from "../../components/PorqueElegirnos/ProjectDescription";

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

  const pageTitle = project ? ` ${project.title} | Legno Haus` : "Legno Haus";

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
      <div className="loadingContainer">
        <div className="loadingSpinner"></div>
        <p>Cargando proyecto...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="errorContainer">
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto que buscas no existe o ha sido removido.</p>
        <button
          onClick={() => router.push("/proyectos")}
          className="backButton"
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
          process.env.NEXT_PUBLIC_SITE_URL || "http://legnohaus.com.ar"
        }/proyectos/${project.id}`}
      />

      <main className="projectPage">
        <button
          className="backHomeButton"
          onClick={() => router.push("/#proyectos")}
          aria-label="Volver a proyectos"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10 6L4 12L10 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="content">
          <section
            className="carouselSection"
            aria-label="Galería de imágenes del proyecto"
          >
            <div className="carouselContainer">
              <div className="carouselWrapper" style={{ height: "100vh" }}>
                <div className="carouselTrack">
                  <Image
                    src={images[currentIndex]}
                    alt={`${project.title} - Imagen ${currentIndex + 1}`}
                    width={800}
                    height={500}
                    className="carouselImage"
                    priority={currentIndex === 0}
                    onClick={() => setIsZoomOpen(true)} // 👈 también abre el zoom al hacer clic
                    style={{ cursor: "zoom-in" }}
                  />
                </div>

                {images.length > 1 && (
                  <div className="sideControls">
                    <div className="linePager" aria-hidden>
                      <div className="linePagerInner">
                        {images.map((_, idx) => (
                          <span
                            key={idx}
                            className={`dot ${
                              idx === currentIndex ? "dotActive" : ""
                            }`}
                          />
                        ))}
                      </div>

                      <div className="arrows">
                        <button
                          onClick={handlePrevious}
                          aria-label="Imagen anterior"
                          className="navButton"
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
                          className="navButton"
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
                  className="zoomButton"
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

              <div className="carouselOverlay">
                <h3 className="overlayTitle">{project.title}</h3>
              </div>
            </div>
          </section>
          {/* 
          <div className="overlayDescription">
            {(project.subtitle || project.description) && (
              <p>{project.subtitle || project.long_description}</p>
            )}
          </div> */}

          <ProjectDescription
            subtitle={project.subtitle}
            description={project.long_description || project.description}
          />
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
