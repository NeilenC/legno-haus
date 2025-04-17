import React from "react";
import "./aboutStyles.css";
import Image from "next/image";
const About = () => {
  return (
    <div id="quienes-somos" className="about-container">
    <h2>¿ Quiénes <span>somos</span> ?</h2>

      <div className="about-main-content">
        <div className="text-container">
          <p>
            En <span>Legno Haus</span> , creemos que un hogar de calidad es la base del
            bienestar personal y familiar. Por eso, desarrollamos módulos
            habitacionales innovadores, sostenibles y accesibles, diseñados para
            transformar no solo viviendas, sino también comunidades. Utilizamos
            madera, un recurso renovable y de bajo impacto ambiental, para crear
            hogares eficientes, funcionales y estéticamente atractivos. Nuestro
            compromiso es acompañar a cada cliente en todo el proceso,
            garantizando una experiencia sencilla y placentera. Más que
            construir casas, en Legno Haus impulsamos un cambio: hogares
            modernos, barrios revitalizados y un futuro más sustentable.
          </p>
        </div>

        <div className="about-images">
          <Image width={200} height={300} alt="quienes-somos" src={"/el.png"} style={{}}/>
          <Image
            width={200}
            height={300}
            alt="quienes-somos"
            src={"/ella.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
