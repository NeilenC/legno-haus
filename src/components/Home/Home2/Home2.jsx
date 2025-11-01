import { useState } from "react";

export default function HomeComponent2() {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <main id="home" className="main-container">
      <div className="contenedor-home">
        {/* <Navbar2 /> */}

        <section className="seccion-hero">
          <div className="texto-hero">
            <div className="logo-leyenda">
                {/* TU <span>ENFOQUE </span>EN TUS SUEÑOS
                <br />
                EL NUESTRO EN TU<span> HOGAR</span> */}
                <p> Tu enfoque en tus sueños</p>
                <p style={{fontWeight: 300, fontSize: '30px '}}> el nuestro en tu hogar</p>
            </div>
            {/* <div className="cta-section">
              <button
                className="cta-button secondary"
                onClick={() => scrollToSection("contacto")}
              >
                Contacto
              </button>
            </div> */}
          </div>
          {/* <div className="scroll-indicator">
            <span>Descubrí</span>
            <div className="line"></div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
