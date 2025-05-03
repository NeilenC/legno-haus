import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLeaf,
  faDollarSign,
  faBuilding,
  faHammer,
  faTrophy,
  faMagic,
  faRocket,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

const beneficios = [
  { label: "Rápido", icon: faClock, description: "Construcción en tiempo récord" },
  { label: "Sustentable", icon: faLeaf, description: "Materiales ecológicos" },
  { label: "Bajo costo", icon: faDollarSign, description: "Soluciones accesibles" },
  { label: "Construcción en seco", icon: faHammer, description: "Tecnología limpia" },
  { label: "Pre construída", icon: faBuilding, description: "Instalación inmediata" },
  { label: "Calidad superior", icon: faTrophy, description: "Estándares elevados" },
  { label: "Diseño Innovador", icon: faMagic, description: "Diseño vanguardista" },
  { label: "Pensadas por profesionales", icon: faUserTie, description: "Equipo experto" },
  { label: "Ser parte del futuro", icon: faRocket, description: "Tecnología avanzada" },
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="beneficios-section">
      <div className="section-header">
        {/* <h2 className="section-subtitle">NUESTRAS VENTAJAS</h2> */}
        <h1 className="section-title"><span>Beneficios</span></h1>
      </div>

      <div className="beneficios-circles">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="circle-container ">
            <div className="beneficio-circle">
              <FontAwesomeIcon icon={beneficio.icon} className="circle-icon beneficio-icon" />
            </div>
            <div className="circle-text">
              <h3 className="circle-label">{beneficio.label}</h3>
              <p className="circle-description">{beneficio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;