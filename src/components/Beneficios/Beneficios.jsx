import React from 'react';
import './beneficios.css';

const beneficios = [
  { label: "Rápido", icon: "/icons/fast.svg" },
  { label: "Sustentable", icon: "/icons/sustainable.svg" },
  { label: "Bajo costo", icon: "/icons/low-cost.svg" },
  { label: "Pre construida", icon: "/icons/prebuilt.svg" },
  { label: "Construcción en seco", icon: "/icons/dry.svg" },
  { label: "Calidad superior", icon: "/icons/quality.svg" },
  { label: "Diseño Innovador", icon: "/icons/design.svg" },
  { label: "Ser parte del futuro", icon: "/icons/future.svg" },
  { label: "Pensadas por profesionales", icon: "/icons/professional.svg" }
];

const Beneficios = () => {
  return (
    <div className="beneficios-container">
      <h2 className="titulo">Beneficios</h2>
      <div className="beneficios-grid">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="beneficio-card">
            <div className="circle">
              <img src={beneficio.icon} alt={beneficio.label} className="icon" />
            </div>
            <span className="beneficio-text">{beneficio.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficios;
