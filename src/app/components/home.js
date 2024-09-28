'use client'

import Image from 'next/image' 
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], 
});

  
  export default function Home() {


    return (
      <div className="relative "> 
        <div className='parallax_home_cover'></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto max-w-7xl lg:px-8 px-6 pt-[50px] z-10`}>
          <div className="flex flex-col items-center justify-between ">
            <Image
              src="/profile_picture.png"
              width={300}
              height={300}
              alt="Profile image"
              className='rounded-full mb-10 floating-image'
            />
            <h2 className={`text-7xl font-bold tracking-tight text-primary sm:text-6x transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:tracking-widest hover:scale-125 ${pacifico.className}`}>Mia Nguyen</h2>
          </div>

        </div>
      </div>
    )
  }
  