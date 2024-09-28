'use client'

import Image from 'next/image' 
import { Pacifico } from 'next/font/google';
import { useEffect, useState } from 'react';

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
        <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto max-w-7xl lg:px-8 px-6 pt-[50px] z-10`}>

          <div className="flex flex-col items-center justify-between"  style={{ "transform": `scale(${scale})`, "transition": 'transform 0.3s ease' }}
 id='responsive-area'>
            <Image
              src="/profile_picture.png"
              width={350}
              height={350}
              alt="Profile image"
              className='rounded-full mb-10 floating-image'
            />
            <h2 className={`text-7xl font-bold tracking-tight text-primary sm:text-6x transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:tracking-widest hover:scale-125 ${pacifico.className}`}>Mia Nguyen</h2>
          </div>
         
        </div>        
      </div>
    )
  }
  