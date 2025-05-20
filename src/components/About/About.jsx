import React from "react";

const About = () => {
  return (
    <section id="quienes-somos" className="about-section">
      <div className="section-header">
        <h1 className="section-title">
          ¿Quiénes <span>somos</span>?
        </h1>
      </div>

      <div className="about-content">
        <div className="about-text">
        <p className="intro-text">
  En <span>Legno Haus</span>, creemos que un hogar de calidad es la base del
  <span> bienestar personal</span> y <span>familiar</span>.
  <br/> <br/> Nacimos para ser parte activa del cambio <span className="highlight-text">social, tecnológico y urbano</span>. 
</p>
          
          <div className="text-columns">
            <p>
              Creemos que la vivienda debe ser una de las herramientas de transformación, por eso nuestra misión es revitalizar barrios y construir comunidades con identidad moderna y fuerte sentido de pertenencia. <br/>Para esto, desarrollamos un concepto innovador de módulos habitacionales que combinan sistemas constructivos eficientes y una experiencia centrada en las personas. 
            </p>
            <p>
              En <strong>Legno Haus</strong> diseñamos y construimos hogares modulares de madera accesibles y únicos para quienes buscan más que una casa: un nuevo estilo de vida. <br/> En cada paso, estamos al lado de quienes nos eligen, haciendo simple y placentera la experiencia de construir su nuevo hogar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section id="quienes-somos" className="about-section">
//       <div className="section-header">
//         {/* <h2 className="section-subtitle">NUESTRA FILOSOFÍA</h2> */}
//         <h1 className="section-title">
//           ¿Quiénes <span>somos</span>?
//         </h1>
//       </div>

//       <div className="about-content">
//         <div className="about-text">
//           <p className="intro-text">
//             En <span>Legno Haus</span>, creemos que un hogar de calidad es la base del
//             <span> bienestar personal</span> y <span>familiar</span>.
//            <br/> <br/> Nacimos para ser parte activa del cambio social, tecnológico y urbano. 
//           </p>
          
//           <div className="text-columns">
//             <p>
//           Creemos que la vivienda debe ser una de las herramientas de transformación, por eso nuestra misión es revitalizar barrios y construir comunidades con identidad moderna y fuerte sentido de pertenencia. <br/>Para esto, desarrollamos un concepto innovador de módulos habitacionales que combinan sistemas constructivos eficientes y una experiencia centrada en las personas. 
//             </p>
//             <p>
//       En <strong>Legno Haus</strong> diseñamos y construimos hogares modulares de madera accesibles y únicos para quienes buscan más que una casa: un nuevo estilo de vida. <br/> En cada paso, estamos al lado de quienes nos eligen, haciendo simple y placentera la experiencia de construir su nuevo hogar.
//             </p>
//           </div>
//         </div>

//         <div className="about-images">
//           <div className="image-container first-image">
//             <Image 
//               width={250} 
//               height={350} 
//               alt="Fundador" 
//               src={"/el.png"}
//               className="about-img"
//             />
//           </div>
//           <div className="image-container second-image">
//             <Image
//               width={250}
//               height={350}
//               alt="Co-fundadora"
//               src={"/ella.png"}
//               className="about-img"
//               />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;