import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ContactSection from "./Components/ContactSection";
import ProjectsSection from "./Components/ProjectsSection";
import TechSkills from "./Components/TechSkills";
import AboutSection from "./Components/AboutSection";
import FooterSection from "./Components/FooterSection";

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TechSkills />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default React.memo(App);
