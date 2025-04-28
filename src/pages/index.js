// ... existing code ...
import About from "@/components/About/About";
import Beneficios from "@/components/Beneficios/Beneficios";
import Contacto from "@/components/Contacto/Contacto";
import Home2 from "@/components/Home/Home2/Home2";
import HomeComponent from "@/components/Home/HomeComponent";
import Navbar from "@/components/Navbar/Navbar";
import PorqueElegirnos from "@/components/PorqueElegirnos/PorqueElegirnos";
import Proyectos from "@/components/Proyectos/Proyectos";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legno Haus</title>
        <meta name="description" content="Legno Haus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {/* <HomeComponent /> */}
      <Home2/>
      <Proyectos />
      <About />
      <PorqueElegirnos />
      <Beneficios />
      <Contacto />
    </>
  );
}
