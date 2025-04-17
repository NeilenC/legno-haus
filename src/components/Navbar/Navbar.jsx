import { useRef, useState } from "react";
import logo from "../../../public/logo.png";
import "./navbar.css";
import Image from "next/image";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  

  return (
    <nav className="navbar-container" ref={navbarRef}>
      <div className="navbar-content">
        <div className="logo">
          <Image
            src={logo}
            alt="LH-logo"
            width={50}
            height={50}
            className="navbar-logo"
          />
          <p>LEGNO HAUS</p>
        </div>
        <div className="navbar-options">
          {/* <button
            onClick={() => scrollToSection("proyectos")}
            className={`nav-button ${activeSection === "proyectos" ? "active" : ""}`}
          >
            Proyectos
          </button> */}
          <button
            onClick={() => scrollToSection("proyectos")}
            className={`nav-button ${activeSection === "proyectos" ? "active" : ""}`}
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("quienes-somos")}
            className={`nav-button ${activeSection === "quienes-somos" ? "active" : ""}`}
          >
          ¿Quiénes Somos?
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className={`nav-button ${activeSection === "contacto" ? "active" : ""}`}

          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useState, useEffect, useRef } from 'react';
// import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
// import logo from '../../../public/logo.png'
// import './navbar.css';
// import Image from 'next/image';

// const Navbar = () => {
//   const [showMore, setShowMore] = useState(false);
//   const navbarRef = useRef(null);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setShowMore(false);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setShowMore(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="navbar-container" ref={navbarRef}>
//       <div className={`navbar-content ${showMore ? 'expanded' : ''}`}>

//         <Image src={logo} alt='LH-logo' width={50} height={50} style={{marginRight:'50px'}}/>

//         <button onClick={() => scrollToSection('proyectos')} className="nav-button">
//           Proyectos
//         </button>
//         <button onClick={() => scrollToSection('quienes-somos')} className="nav-button">
//           Quiénes Somos
//         </button>

//         <button onClick={() => setShowMore(!showMore)} className="nav-button icon-button">
//           {showMore ? <FaChevronDown /> : <FaChevronRight />}
//         </button>

//         {showMore && (
//           <div className="extra-options">
//             {/* <button onClick={() => scrollToSection('inicio')} className="nav-button">
//               Inicio
//             </button>
//             <button onClick={() => scrollToSection('catalogo')} className="nav-button">
//               Catálogo
//             </button> */}

// <button onClick={() => scrollToSection('contacto')} className="nav-button">
//               Beneficios
//             </button>
//             <button onClick={() => scrollToSection('contacto')} className="nav-button">
//               Contacto
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
