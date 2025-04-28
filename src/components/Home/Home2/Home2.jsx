import Image from "next/image";
import "./home2styles.css";

export default function Home() {
  return (
    <main className="contenedor-home">
      <header className="barra-navegacion">
        <p className="logo">
          LEGNO <br />
          <span style={{ fontSize: "15px" }}>HAUS</span>{" "}
        </p>
        <nav>
          <ul>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">¿Quiénes somos?</a>
            </li>
            <li>
              <a href="#">¿Por qué elegirnos?</a>
            </li>
            <li>
              <a href="#">Beneficios</a>
            </li>
            <li>
              <a href="#">Contácto</a>
            </li>
          </ul>
        </nav>
        {/* <button className="boton-login">Entrar</button> */}
      </header>

      <section className="seccion-hero">
        <div className="texto-hero">
          <div className="logo-leyenda">
            <Image src={"/logo.png"} width={90} height={90} />
            <h1>
              TU <span>ENFOQUE </span>EN TUS SUEÑOS, <br />
              EL NUESTRO EN TU<span> HOGAR </span>
            </h1>
          </div>
          <div className="text">
            {/* <p>
              Donde la modernidad y la sostenibilidad se unen.
              <br /> Descubrí cómo podemos hacer realidad la casa de tus sueños.
            </p> */}
            <div className="botones-hero">
              <button className="primario">Conocer</button>
              <button className="secundario">Contactanos</button>
            </div>
          </div>
        </div>
        <div className="imagen-hero">
          <Image
            src="/home-background.jpeg"
            alt="imagen"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
  );
}
