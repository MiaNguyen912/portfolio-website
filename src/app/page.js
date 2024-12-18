'use client';
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import SlandedGrid from "../components/slanded-grid";
import OrbitsAnimation from "../components/orbits-animation";
import Graphic3D from "@/components/graphic-3D";

export default function Main() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section'); // Get all sections
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // Get the top position of the section
      const sectionHeight = section.offsetHeight; // Get the height of the section

      // Check if the section is in view
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <Header activeSection={activeSection} />

      <main>
          {/* Home */}
         <div id="home" className="section">
            <Home />
         </div>

         {/* About */}
         <div id="about" className="section">
            <About />
         </div>

         {/* Project */}
         <div id="projects" className="section">
            <Projects />
            
         </div>

         {/* <div id="test" className="section">  
            <Graphic3D />
            <SlandedGrid />
            <OrbitsAnimation />
         </div> */}

        {/* Contact */}
        <div id="contact" className="section">
            <Contact />
        </div>

      </main>
      <Footer />
      
    </>
  );
}
