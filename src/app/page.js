'use client';
import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

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
            {/* <ImageSlideshow /> */}
         </div>

         {/* About */}
         <div id="about" className="section">
            <About />
         </div>

         {/* Career */}
         <div id="projects" className="section">
            <Projects />
            {/* <div className={classes.parallax_career_cover}></div> */}
         </div>

        {/* Contact */}
        <div id="contact" className="section">
            <Contact />
        </div>

      </main>
      <Footer />
      
    </>
  );
}
