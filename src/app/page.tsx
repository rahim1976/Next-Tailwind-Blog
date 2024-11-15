"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";




export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });

    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Slider />
      <Cards />
      <Footer />
    </>
  );
}
