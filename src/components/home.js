'use client'

import Image from 'next/image' 
import { Pacifico } from 'next/font/google';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react"

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], 
});

  export default function Home() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
      const handleScroll = () => { // make the responsive-area scale up and down based on scroll position
        const scrollY = window.scrollY || document.documentElement.scrollTop;
  
        // Define specific scroll thresholds
        if (scrollY < 10) { 
          setScale(1); // Original size
        } else if (scrollY >= 10 && scrollY < 50) {
          setScale(0.96); // Shrink
        } else if (scrollY >= 50 && scrollY < 80) {
          setScale(0.92); 
        } else if (scrollY >= 80 && scrollY < 120) {
          setScale(0.8); 
        } else if (scrollY >= 120) {
          setScale(0.75); 
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);




    return (
      <div className="relative "> 
        <div className='parallax_home_cover'></div>
        <div className={`absolute lg:top-1/3 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto max-w-[60%] lg:px-8 px-4 pt-[50px] z-10`}>

          <div className="flex flex-col items-center justify-between"  style={{ "transform": `scale(${scale})`, "transition": 'transform 0.3s ease' }} id='responsive-area'>
            {/* profile image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.3}}
            >
                <Image
                  src="/profile_picture.png"
                  width={350}
                  height={350}
                  alt="Profile image"
                  className='rounded-full mb-10 floating-image'
                  priority
                />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.3 }}
              className={`md:text-7xl text-4xl text-nowrap font-bold tracking-tight text-primary transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:tracking-widest hover:scale-125 ${pacifico.className}`}
            >
              Mia Nguyen
            </motion.h1>

            {/* download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1.3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              <div className="flex flex-row items-center justify-between gap-10 mt-14">
                <a href="Mia_nguyen_resume.pdf" download="Mia_nguyen_resume.pdf" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-2xl shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300">
                  <FontAwesomeIcon icon={faDownload} />   {/*Download icon from FontAwesome*/}
                  Resume
                </a>
                <a href="UCI_Transcript.pdf" download="UCI_Transcript.pdf" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-2xl shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300">
                  <FontAwesomeIcon icon={faDownload} />   {/*Download icon from FontAwesome*/}
                  Transcript
                </a>
              </div>
            </motion.div>
            
          </div>
         
        </div>        
      </div>
    )
  }
  