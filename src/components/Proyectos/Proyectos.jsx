import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ImageModal from "./ImageModal";
import projects from "../../utils/projects.json";

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedProject]);

  const openModal = (image, title) => {
    setSelectedProject({ image, title });
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const goToProject = (id) => {
    router.push(`/proyectos/${id}`);
  };

  return (
    <section id="proyectos" className="proyectos-section">
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          paddingTop: "100px",
          width: "calc(100% - 100px)",
        }}
      >
        <div className="proyectos-header">
          <h2 className="section-subtitle">NUESTROS PROYECTOS</h2>
          <div className="proyectos-texts">
            <p className="proyectos-title">
              La <span>madera</span>, el cambio del <span>presente</span>
              <br />
            </p>
            <p className="proyectos-subtitle">
              {" "}
              Hogares modernos, barrios revitalizados
              <br />
              <span>y un futuro sustentable</span>
            </p>
          </div>
        </div>

        <div className="proyectos-container">
          {projects.map((item) => (
            <div key={item.id} className="proyecto-item">
              <div
                className="image-wrapper"
                onClick={() => openModal(item.images[0], item.title)}
              >
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="proyecto-image"
                />
              </div>
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <a
                    href={`/proyectos/${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="proyecto-btn">Ver proyecto</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ImageModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          imageUrl={selectedProject?.image || ""}
          title={selectedProject?.title || ""}
        />
      </div>
    </section>
  );
};

export default Proyectos;
