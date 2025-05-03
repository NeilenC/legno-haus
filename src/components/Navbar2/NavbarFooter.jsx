const NavbarFooter = () => {
    return (
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          zIndex: 1000,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span className="logo-text" style={{ fontWeight: 700 }}>LEGNO</span>
          <span className="logo-subtext" style={{ fontSize: "12px"}}>HAUS</span>
        </div>
  
        <div style={{ display: "flex", gap: '40px' }}>
          <a href="#proyectos">Proyectos</a>
          <a href="#quienes-somos">¿Quiénes somos?</a>
          <a href="#porque-elegirnos">¿Por qué elegirnos?</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    );
  };
  
  export default NavbarFooter;
  