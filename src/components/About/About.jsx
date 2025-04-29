import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="quienes-somos" className="about-section">
      <div className="section-header">
        <h2 className="section-subtitle">NUESTRA FILOSOFÍA</h2>
        <h1 className="section-title">
          ¿Quiénes <span>somos</span>?
        </h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="intro-text">
            En <span>Legno Haus</span>, creemos que un hogar de calidad es la base del
            <span> bienestar personal</span> y <span>familiar</span>.
          </p>
          
          <div className="text-columns">
            <p>
              Desarrollamos módulos habitacionales innovadores, sostenibles y accesibles, diseñados para
              transformar no solo viviendas, sino también comunidades. Utilizamos
              madera, un recurso renovable y de bajo impacto ambiental.
            </p>
            <p>
              Nuestro compromiso es acompañar a cada cliente en todo el proceso,
              garantizando una experiencia sencilla y placentera. Más que
              construir casas, en Legno Haus impulsamos un cambio: hogares
              modernos, barrios revitalizados y un futuro más sustentable.
            </p>
          </div>
        </div>

        <div className="about-images">
          <div className="image-container first-image">
            <Image 
              width={300} 
              height={450} 
              alt="Fundador" 
              src={"/el.png"}
              className="about-img"
            />
          </div>
          <div className="image-container second-image">
            <Image
              width={300}
              height={450}
              alt="Co-fundadora"
              src={"/ella.png"}
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;