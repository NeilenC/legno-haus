'use client';
import React from 'react';
import './contacto.css';

const Contacto = () => {
  return (
    <div className="contact-wrapper">
      <div className="background-image" />

      {/* Texto sobre la imagen */}
      <div className="contact-text">
        <h2>¿Necesitas más de una</h2>
        <h2 className="highlight">Legno Hause?</h2>
      </div>

      {/* Sección verde con formulario */}
      <div className="contact-right">
        <form className="contact-form">
          <label>
            Nombre completo *
            <input type="text" required />
          </label>
          <label>
            Teléfono *
            <input type="tel" required />
          </label>
          <label>
            Email *
            <input type="email" required />
          </label>
          <label>
            Horario para contactarte *
            <input type="text" required />
          </label>
          <label>
            Mensaje
            <textarea rows={4}></textarea>
          </label>
          <button type="submit">Consultar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
