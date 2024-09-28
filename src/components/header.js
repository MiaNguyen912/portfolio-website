'use client'

import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Project', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]


export default function Header({activeSection}) {

  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
      block: "start",     // Align at the start of the element
    });
  };

  return (
    <header className="relative z-50 ">
      <nav aria-label="Global" className="inset-x-0 bg-primary fixed flex items-center justify-end py-4 lg:px-20 px-8 top-0">

       

        <div className="flex md:gap-x-12 md:w-fit w-full justify-between md:right-0">
          {navigation.map((item) => (
              <a key={item.name} onClick={() =>{scrollToElement(item.id)}} className={`${activeSection === item.id? "text-shadow-glow-pink text-tertiary" : 'text-secondary' } md:text-lg text-sm font-semibold brightness-110 transition-all duration-300 ease-in-out hover:text-shadow-glow-pink hover:text-tertiary hover:scale-110 hover:cursor-pointer`} > 
                {item.name}
              </a>
          ))}
         
        </div>

      </nav>
    </header>
  )
}
