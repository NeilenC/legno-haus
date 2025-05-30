import React from "react";
import FacebookIcon from "@/commons/FacebookIcon";
import InstagramIcon from "@/commons/InstagramIcon";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-container">
            {/* Reemplaza con tu logo */}
            <span className="logo-text">LEGNO</span>
            <span className="logo-subtext">HAUS</span>
          </div>
          <p className="brand-slogan">
            Tu enfoque en tus sueños,
            <br />
            el nuestro en tu hogar
          </p>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3 className="links-title">Explorar</h3>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#quienes-somos">Nosotros</a>
              </li>
              <li>
                <a href="#beneficios">Beneficios</a>
              </li>
            </ul>
          </div>

          {/* <div className="links-column">
            <h3 className="links-title">Legal</h3>
            <ul>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div> */}

          <div className="links-column">
            <h3 className="links-title">Contacto</h3>
            <ul>
              <li>
                <a href="mailto:infolegnohaus@gmail.com">infolegnohaus@gmail.com</a>
              </li>
              <li>
                <a href="tel:+5491150031001">+54 9 11 5003-1001</a>
              </li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61574909873118&locale=es_LA"
            aria-label="Facebool"
             target="_blank"
          >
            <span>
              <FacebookIcon />
            </span>
          </a>
          <a href="
          https://www.instagram.com/legnohausoficial/" aria-label="Instagram" target="_blank">
            <span>
              <InstagramIcon />
            </span>
          </a>
          {/* <a href="#" aria-label="LinkedIn">
            <span className="social-icon">IN</span>
          </a> */}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Legno Haus. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
