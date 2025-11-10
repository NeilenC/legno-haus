import Image from "next/image";
import React, { useState } from "react";
import { useBreakpoint } from "../../../Hook/useBreakpoint";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="barra-navegacion">
      <Image
        src="/logo-lineas.webp"
        alt="Legno Haus Logo"
        width={breakpoint === "mobile" ? 70 : 93}
        height={breakpoint === "mobile" ? 98 : 120}
      />

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={menuOpen ? "menu-mobile open" : "menu-mobile"}>
        <ul>
          <li>
            <a href="#proyectos" onClick={toggleMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#quienes-somos" onClick={toggleMenu}>
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <a href="#porque-elegirnos" onClick={toggleMenu}>
              ¿Por qué elegirnos?
            </a>
          </li>
          <li>
            <a href="#beneficios" onClick={toggleMenu}>
              Beneficios
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={toggleMenu}>
              <button className="cta-button secondary" onClick={toggleMenu}>
                Contacto
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar2;
