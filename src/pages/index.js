// ... existing code ...
import WhatsappIcon from "@/commons/WhatsappIcon";
import About from "@/components/About/About";
import Beneficios from "@/components/Beneficios/Beneficios";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";
import Home2 from "@/components/Home/Home2/Home2";
import HomeComponent from "@/components/Home/HomeComponent";
import MiddleComponent from "@/components/MiddleComponent/MiddleComponent";
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar2/Navbar2";
import PorqueElegirnos from "@/components/PorqueElegirnos/PorqueElegirnos";
import Proyectos from "@/components/Proyectos/Proyectos";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legno Haus</title>
        <meta name="description" content="Legno Haus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar2 />
      {/* <HomeComponent /> */}
      <Home2 />
      <Proyectos />
      <About />
      <PorqueElegirnos />
      {/* <MiddleComponent/> */}
      <Beneficios />
      <Contacto />
      <Footer />

      <Link
        href="https://wa.me/+5491150031001"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "60px",
          right: "30px",
          zIndex: 1000,
        }}
      >
        <WhatsappIcon />
      </Link>
    </>
  );
}
