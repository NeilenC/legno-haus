import React, { useEffect } from "react"
// import "./aboutStyles.css"

const About = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".text-card")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          } else {
            entry.target.classList.remove("active")
          }
        })
      },
      { threshold: 0.2 } // se activa cuando el 20% del elemento es visible
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="quienes-somos" className="about-section">
      <div className="about-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="badge">
            <p>
              ¿ Quiénes <span className="about-title-color">Somos </span> ?
            </p>
          </div>
          <div className="subtitle-box">
            <p className="section-subtitle">
              Construimos más que casas,{" "}
              <span className="about-title-color"> creamos hogares </span>
              <br />
              En <strong>Legno Haus</strong>, creemos que un hogar de calidad es
              la base del bienestar personal y familiar. Nacimos para ser parte
              activa del cambio <strong>social, tecnológico y urbano</strong>.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="text-cards-grid">
            <div className="text-card">
              <div className="card-content">
                <p>
                  Creemos que la vivienda debe ser una de las herramientas de
                  transformación, por eso nuestra misión es revitalizar barrios
                  y construir comunidades con identidad moderna y fuerte sentido
                  de pertenencia.
                </p>
                <p>
                  Para esto, desarrollamos un concepto innovador de módulos
                  habitacionales que combinan sistemas constructivos eficientes
                  y una experiencia centrada en las personas.
                </p>
              </div>
            </div>

            <div className="text-card">
              <div className="card-content">
                <p>
                  En <strong>Legno Haus</strong> diseñamos y construimos hogares
                  modulares de madera accesibles y únicos para quienes buscan más
                  que una casa: un nuevo estilo de vida.
                </p>
                <p>
                  En cada paso, estamos al lado de quienes nos eligen, haciendo
                  simple y placentera la experiencia de construir su nuevo hogar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
