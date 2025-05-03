'use client';
import React, { useEffect, useRef } from 'react';

const Contacto = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Ajuste para compensar el navbar fijo
    if (sectionRef.current) {
      const navbarHeight = 98;
      sectionRef.current.style.scrollMarginTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <section id='contacto' className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2 className="hero-title">
              ¿Necesitás más de una<br />
              <span className="hero-highlight">Legno Haus</span>?
            </h2>
            <p className="hero-subtitle">Dejanos tus datos y nos pondremos en contacto</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="form-input"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="schedule">Horario para contactarte *</label>
              <input 
                type="text" 
                id="schedule" 
                required 
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                id="message" 
                rows={4} 
                className="form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              HABLEMOS
              <span className="arrow-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;