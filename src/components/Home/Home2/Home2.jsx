import "./home2styles.css";

export default function HomeComponent2() {
  return (
    <main className="main-container">
      <div className="contenedor-home">
        {/* <Navbar2 /> */}

        <section className="seccion-hero">
          <div className="texto-hero">
            <div className="logo-leyenda">
              <h1 className="leyenda">
                TU <span>ENFOQUE </span>EN TUS SUEÑOS
                <br />
                EL NUESTRO EN TU<span> HOGAR</span>
              </h1>
            </div>
            <div className="cta-section">
              <button className="cta-button">Explorar Proyectos</button>
              <button className="cta-button secondary">Contacto</button>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Descubrí</span>
            <div className="line"></div>
          </div>
        </section>
      </div>
    </main>
  );
}