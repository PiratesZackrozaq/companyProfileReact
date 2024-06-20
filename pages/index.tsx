import React, { useState } from "react";
import SeoHead from "./components/SeoHead";
import NavCompMobile from "./components/NavCompMobile";
import NavComp from "./components/NavComp";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Homepage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="overflow-hidden">
      <SeoHead title='BlackPearlVPN Landing Page' />
      <NavCompMobile showNav={showNav} closeNav={closeNavHandler} />
      <NavComp openNav={showNavHandler} />
      <Hero />
      <AboutUs />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;