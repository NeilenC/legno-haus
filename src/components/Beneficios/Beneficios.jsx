import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faLeaf,
  faDollarSign,
  faBuilding,
  faHammer,
  faMagic,
  faRocket,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"
import "./beneficios.css"
import ExperienceIcon from "../../commons/ExperienceIcon"
import ProfessionalIcon from "../../commons/ProfessionalIcon"
import FinishesIcon from "../../commons/FinishesIcon"
import SustainabilityIcon from "../../commons/SustainabilityIcon"

const beneficios = [
  { label: "Rápido", icon: faClock, description: "Construcción en tiempo récord" },
  { label: "Sustentable", icon: faLeaf, description: "Materiales ecológicos" },
  { label: "Bajo costo", icon: faDollarSign, description: "Soluciones accesibles" },
  { label: "Construcción en seco", icon: faHammer, description: "Tecnología limpia" },
  { label: "Pre construída", icon: faBuilding, description: "Instalación inmediata" },
  { label: "Diseño Innovador", icon: FinishesIcon, description: "Diseño vanguardista" },
  { label: "Pensadas por profesionales", icon: ProfessionalIcon, description: "Equipo experto" },
  { label: "Ser parte del futuro", icon: faRocket, description: "Tecnología avanzada" },
]

const Beneficios = () => {
  return (
    <section id="beneficios" className="beneficios-section">
       <div className="nosotros-section">
        <div className="nosotros-content">
          <h2 className="nosotros-title">Beneficios</h2>
          <h3 className="nosotros-subtitle">Remodelación Residencial Novart</h3>
          <p className="nosotros-text">
            Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble
            clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y
            permitir que los usuarios sepan más sobre ti.
          </p>
        </div>
        <div className="nosotros-image">
          <img
            src="/living.webp"
            alt="Equipo de trabajo Novart"
          />
        </div>
      </div>
      {/* <div className="section-header">
        <h1 className="section-title">
          <span>Beneficios</span>
        </h1>
      </div> */}

      <div className="beneficios-grid">
        {beneficios.map((beneficio, index) => {
          const Icon = beneficio.icon
          return (
            <div key={index} className="beneficio-card">
              {typeof Icon === "function" ? (
                <Icon className="beneficio-icon" />
              ) : (
                <FontAwesomeIcon icon={Icon} className="beneficio-icon" />
              )}
              <div className="beneficio-text">
                <h3 className="beneficio-label">{beneficio.label}</h3>
                <p className="beneficio-description">{beneficio.description}</p>
              </div>
            </div>
          )
        })}
      </div>


      <div className="nosotros-section">
       
        <div className="nosotros-image">
          <img
            src="/living.webp"
            alt="Equipo de trabajo Novart"
          />
        </div>

         <div className="nosotros-content">
          <h2 className="nosotros-title">Beneficios</h2>
          <h3 className="nosotros-subtitle">Remodelación Residencial Novart</h3>
          <p className="nosotros-text">
            Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble
            clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y
            permitir que los usuarios sepan más sobre ti.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Beneficios
