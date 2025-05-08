'use client';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [alert, setAlert] = useState(null);
  const alertRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const navbarHeight = 98;
      sectionRef.current.style.scrollMarginTop = `${navbarHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        if (alertRef.current) {
          alertRef.current.classList.remove('show');
          setTimeout(() => setAlert(null), 500);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ocj90kv',
        'template_h21pnw4',
        formRef.current,
        '-H4Xy1y700eu6Fopj'
      )
      .then(() => {
        setAlert({
          type: 'success',
          title: '¡Mensaje enviado!',
          message: 'Pronto pondremos en contacto.'
        });
        formRef.current.reset();
      })
      .catch(() => {
        setAlert({
          type: 'error',
          title: 'Error',
          message: 'No se pudo enviar el mensaje. Por favor intenta nuevamente.'
        });
      });
  };

  const closeAlert = () => {
    if (alertRef.current) {
      alertRef.current.classList.remove('show');
      setTimeout(() => setAlert(null), 500);
    }
  };

  return (
    <section id="contacto" className="contact-section" ref={sectionRef}>
      {alert && (
        <div
          ref={alertRef}
          className={`alert alert-${alert.type} show`}
          role="alert"
        >
          <div className="alert-icon">
            {alert.type === 'success' ? '✓' : '✕'}
          </div>
          <div className="alert-content">
            <div className="alert-title">{alert.title}</div>
            <div className="alert-message">{alert.message}</div>
          </div>
          <button className="alert-close" onClick={closeAlert}>
            &times;
          </button>
        </div>
      )}
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
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input type="text" id="name" name="name" required className="form-input" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input type="tel" id="phone" name="phone" required className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="schedule">Horario para contactarte *</label>
              <input type="text" id="schedule" name="schedule" required className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="form-textarea"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              HABLEMOS <span className="arrow-icon">→</span>
            </button>

            {/* {status && <p className="form-status">{status}</p>} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
