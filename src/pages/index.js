import WhatsappIcon from "@/commons/WhatsappIcon";
import About from "@/components/About/About";
import Beneficios from "@/components/Beneficios/Beneficios";
import Contacto from "@/components/Contacto/Contacto";
import Home2 from "@/components/Home/Home2/Home2";
import Navbar2 from "@/components/Navbar2/Navbar2";
import PorqueElegirnos from "@/components/PorqueElegirnos/PorqueElegirnos";
import Proyectos from "@/components/Proyectos/Proyectos";
import Head from "next/head";
import SEO from "@/components/SEO";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import NavbarFooter from "@/components/Navbar2/NavbarFooter";
import { useBreakpoint } from "../../Hook/useBreakpoint";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const breakpoint = useBreakpoint();
  const [showNavbar2, setShowNavbar2] = useState(true);
  const [showFooterNav, setShowFooterNav] = useState(false);
  const homeHeightRef = useRef(0);
  const footerObserverRef = useRef(null);

  // Efecto para medir la altura del home al montar y al cambiar el breakpoint
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    homeHeightRef.current = homeSection?.offsetHeight || 600;
  }, [breakpoint]);

  // Efecto principal para manejar el scroll
  useEffect(() => {
    if (breakpoint === "mobile") {
      // En mobile siempre mostrar Navbar2 y nunca el FooterNav
      setShowNavbar2(true);
      setShowFooterNav(false);
      return;
    }

    const handleScroll = () => {
      const scrolledPastHome = window.scrollY > homeHeightRef.current;

      // Solo actualizamos estados si no estamos en la zona del footer
      if (!footerObserverRef.current?.isFooterVisible) {
        setShowNavbar2(!scrolledPastHome);
        setShowFooterNav(scrolledPastHome);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [breakpoint]);

  // Efecto para manejar la visibilidad del footer
  useEffect(() => {
    if (breakpoint === "mobile") return;

    const footerElement = document.querySelector("#footer");
    if (!footerElement) return;

    footerObserverRef.current = {
      isFooterVisible: false,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const isFooterVisible = entries[0].isIntersecting;
        footerObserverRef.current.isFooterVisible = isFooterVisible;

        if (isFooterVisible) {
          // Cuando el footer es visible: mostrar Navbar2 y ocultar FooterNav
          setShowNavbar2(true);
          setShowFooterNav(false);
        } else {
          // Cuando el footer no es visible: comportamiento normal según scroll
          const scrolledPastHome = window.scrollY > homeHeightRef.current;
          setShowNavbar2(!scrolledPastHome);
          setShowFooterNav(scrolledPastHome);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footerElement);
    return () => {
      observer.disconnect();
      footerObserverRef.current = null;
    };
  }, [breakpoint]);

  return (
    <>
      <SEO
        title="Legno Haus "
        description="Construí de forma rápida, sustentable y accesible. Casas modulares de madera con diseño moderno, tecnología limpia y espacios pensados para disfrutar."
        image="/logomarron.webp"
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://legnohaus.com.ar'}/`}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp"  type="image/webp" />
      </Head>

      {/* {showNavbar2 && <Navbar2 />} */}
      <AnimatePresence>
        {showNavbar2 && (
          <motion.div
            key="navbar2" // Esto es esencial para AnimatePresence
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.3, // Reduce ligeramente la duración
              ease: [0.16, 1, 0.3, 1], // Curva de easing más suave
            }}
            style={{
              position: "fixed", // Añade posición fija
              top: 0,
              width: "100%",
              zIndex: 1000, // Asegura que esté por encima de otros elementos
            }}
          >
            <Navbar2 />
          </motion.div>
        )}
      </AnimatePresence>
      {/* {breakpoint !== "mobile" && showFooterNav && <NavbarFooter />} */}
      {breakpoint !== "mobile" && (
        <AnimatePresence>
          {showFooterNav && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                zIndex: 1000, // Asegúrate que está presente
              }}
            >
              <NavbarFooter />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div id="home">
        <Home2 />
      </div>
      <Proyectos />
      <About />
      <PorqueElegirnos />
      <Beneficios />
      <Contacto />


      <Link
        href="https://wa.me/+5491150031001"
        target="_blank"
        rel="noopener noreferrer"
         className="whatsapp-button"
        // style={{
        //   position: "fixed",
        //   bottom: "60px",
        //   right: "30px",
        //   zIndex: 1000,
        // }}
      >
        <WhatsappIcon />
      </Link>

    </>
  );
}
