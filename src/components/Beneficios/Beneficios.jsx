import React from 'react';
import './beneficios.css';

const beneficios = [
  { label: "Rápido", icon: "⏱️", description: "Construcción en tiempo récord" },
  { label: "Sustentable", icon: "🌱", description: "Materiales ecológicos" },
  { label: "Bajo costo", icon: "💲", description: "Soluciones accesibles" },
  { label: "Pre construída", icon: "🏗️", description: "Instalación inmediata" },
  { label: "Construcción en seco", icon: "🔨", description: "Tecnología limpia" },
  { label: "Calidad superior", icon: "🏆", description: "Estándares elevados" },
  { label: "Diseño Innovador", icon: "✨", description: "Diseño vanguardista" },
  { label: " Ser parte del futuro", icon: "🚀", description: "Tecnología avanzada" },
  { label: "Pensadas por profesionales", icon: "👨‍💼", description: "Equipo experto" }
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="beneficios-section">
      <div className="section-header">
        <h2 className="section-subtitle">NUESTRAS VENTAJAS</h2>
        <h1 className="section-title">Beneficios <span>exclusivos</span></h1>
      </div>

      <div className="beneficios-circles">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="circle-container">
            <div className="beneficio-circle">
              <span className="circle-icon">{beneficio.icon}</span>
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