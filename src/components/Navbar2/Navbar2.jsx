import React, { useState } from "react";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="barra-navegacion">
      <p className="logo">
        LEGNO <br />
        <span style={{ fontSize: "15px" }}>HAUS</span>
      </p>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={menuOpen ? "menu-mobile open" : "menu-mobile"}>
        <ul>
          <li><a href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
          <li><a href="#quienes-somos" onClick={toggleMenu}>¿Quiénes somos?</a></li>
          <li><a href="#porque-elegirnos" onClick={toggleMenu}>¿Por qué elegirnos?</a></li>
          <li><a href="#beneficios" onClick={toggleMenu}>Beneficios</a></li>
          <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
