
const Navbar2 = () => {
  return (
    <header className="barra-navegacion">
      <p className="logo">
        LEGNO <br />
        <span style={{ fontSize: "15px" }}>HAUS</span>{" "}
      </p>
      {/* <Image src={'/logo.png'} height={55} width={55}/> */}
      <nav>
        <ul>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#quienes-somos">¿Quiénes somos?</a>
          </li>
          <li>
            <a href="#porque-elegirnos">¿Por qué elegirnos?</a>
          </li>
          <li>
            <a href="#beneficios">Beneficios</a>
          </li>
          <li>
            <a href="#contacto">Contácto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
