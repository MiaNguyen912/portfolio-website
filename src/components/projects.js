'use client'

import { useState, useRef } from 'react'
import { Pacifico } from 'next/font/google';
import Image from 'next/image';
import fablix_image from '@/assets/fablix.png';
import zotquest_image from '@/assets/zot_quest.png';
import zotsearch_image from '@/assets/zot_search.png';
import transtar_image from '@/assets/transtar.png';
import flappybird_image from '@/assets/flappy_bird.png';
import habitmaster_image from '@/assets/habitmaster.png';
import superworld_image from '@/assets/superworld.png';
import aspirely_image from '@/assets/aspirely.png';
import zara_image from '@/assets/zara.png';
import TechNode from './tech-node';
import { motion } from "motion/react"


const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], 
});

const projects = [
    {
    name: 'Aspirely',
    tech_stack: 'Next.js, TypeScript, React Flow, Google Gemini API, OpenResume, Vercel',
    image: aspirely_image,
    url: 'https://aspirely-career-planner.vercel.app/',
    description: 'Aspirely is an AI-powered web app that transforms your resume into an interactive career mind map. We analyze your resume to identify key skills, interests, and experience, suggest tailored career pathways based on your profile, and break each pathway into career modules to make it look approachable, including role overview, suggested skills, personalized skill progress estimation, and learning resources. By clicking into each role or skill, users get a deeper understanding of what to expect and how to upskill effectively.'
  },
  {
    name: 'SuperWorld Map',
    tech_stack: 'React.js, Redux, Node.js, Material UI',
    image: superworld_image,
    url: 'https://map.superworldapp.com/',
    description: 'SuperWorld is an advanced interactive mapping platform that facilitates the exploration, visualization, and transaction of virtual real estate. It integrates geospatial data with user-generated content, enabling seamless property discovery and interaction. The platform incorporates blockchain technology, specifically Ethereum, to ensure secure, transparent transactions and verifiable ownership of digital assets. By combining elements of geolocation-based services with social and commercial functionalities, SuperWorld allows users to buy, sell, and manage virtual properties while creating and sharing immersive content.'
  },
  {
    name: 'Zara Ecommerce',    
    tech_stack: 'React, Next.js, TypeScript, Material UI, ShadCN UI',
    image: zara_image,
    url: 'https://zara-ecommerce-web-app.vercel.app/',
    description: 'Redesigned the Zara e-commerce web app with a focus on user-centered design, accessibility, and responsive layout improvements. View the before-and-after comparison: Design Comparison at https://drive.google.com/file/d/1YPpOinBebHYRLnvBugLPX0H3S-uBh4B9/view?usp=drive_link'
  },
  {
    name: 'Fablix Movie Ticketing',
    tech_stack: 'Java, MySQL, JavaScript, Apache Tomcat, AWS, Docker',
    image: fablix_image,
    url: 'https://drive.google.com/file/d/1oTMvUh_mwMhZdfjgiv6q5UG_vJTR4rry/view?usp=sharing',
    description: 'Full-featured movie ticketing web app with separate client and employee interfaces, supporting bulk data import from XML files. Using Google ReCaptcha and Jasypt for password encryption to enhanced security.'
  },
  {
    name: 'HabitMaster',
    tech_stack: 'React, Next.js, Tailwind CSS, Firebase',
    image: habitmaster_image,
    url: 'https://habit-master.vercel.app/',
    description: 'Habit tracking web app with a minimalist design, featuring a calendar view and a daily checklist. Users can create, update, and delete habits, as well as track their progress and view statistics. View demo video at https://www.youtube.com/watch?v=g91C8ecIry0',
  },
  {
    name: 'Zot Search',
    tech_stack: 'Python, Flask, JavaScript, React, MySQL',
    image: zotsearch_image,
    description: 'A search engine that tokenizes and ranks a vast number of websites based on their tf-idf scores and cosine similarities.',
    url: 'https://drive.google.com/file/d/1QoJMaZMIe5u3u9wrUWy0Rm1WAr0Xn7nK/view?usp=sharing',
  },
  {
    name: 'Zot Quest',
    tech_stack: 'JavaScript, Tailwind CSS',
    image: zotquest_image,
    description: 'Interactive map application using the leaflet.js library to detect and display real-time user locations. Includes a "bucket list" feature for users to explore and locate attractions on the UCI campus. Awarded Third Place at the UCI ZotHacks 2023 beginner hackathon, competing against over a hundred participants.',
    url: 'https://devpost.com/software/zot-quest',
  },
  {
    name: 'TransStar Aircraft Interiors Landing Page',
    tech_stack: 'Next.js, Tailwind CSS',
    image: transtar_image,
    description: 'Landing page with contact form for aircraft interior business.',
    url: 'https://transtarair.com',
  },
  {
    name: 'Flappy Bird',
    tech_stack: 'JavaScript, React.js',
    image: flappybird_image,
    description: 'Flappy Bird game clone.',
    url: 'https://mianguyen912.github.io/FlappyBird-React/',
  },
]

const motionVariants = { // Variants are a set of named targets.
  offscreen: {
    opacity: 0,
    y: 400,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

export default function About() {

  return (
    <div className="bg-primary">
      <div className="relative isolate py-14 overflow-x-clip">
        <motion.div  initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1.3, y: 0 }}transition={{ duration: 0.8}} viewport={{ once: true }} variants={motionVariants}>


            <div>
                <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                  />
                </div>

                <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                  />
                </div>

                <div className="mx-auto max-w-7xl sm:my-40 lg:px-8">

                  <div className="mx-auto max-w-2xl text-center " >
                    <h2 className={`text-4xl font-bold tracking-tight text-transparent pb-6  bg-clip-text bg-gradient-to-r brightness-125 from-pink-600 to-blue-300 sm:text-6xl ${pacifico.className}`} >My projects</h2>
                  </div>

                  <ul className="group md:mx-auto mx-8 lg:mt-20 md:mt-8 mt-4 grid max-w-2xl grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3" >
                    {projects.map((project) => (
                      <li key={project.name} className='relative p-5 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-50 hover:!opacity-100 hover:bg-pink-100 hover:bg-opacity-10'>
                        <div className=''>
                            <a href={project.url} target="_blank" className='transition-transform duration-300 ease-in-out  hover:brightness-110'>
                                <Image 
                                  alt={project.name}
                                  src={project.image} 
                                  className="aspect-[14/10] w-full mx-auto rounded-2xl object-fit transition-all duration-300 ease-in-out hover:rotate-3 hover:scale-110 hover:shadow-lg hover:shadow-black " 
                                />
                            </a>
                            <span className='mt-6 block'>
                                <a className="text-lg font-semibold leading-8 tracking-tight text-tertiary brightness-110 hover:text-shadow-glow-pink" href={project.url} target="_blank">{project.name}</a>
                            </span>
                            {
                              project.tech_stack.split(', ').map((tech) => (
                                <TechNode key={tech}>{tech}</TechNode>
                              ))
                            }
                            <p className="sm:text-sm text-xs text-gray-300">{project.description}</p>
                        </div>
                  
                        
                      </li>
                    ))}
                  </ul>
                </div>

            </div>
        </motion.div>
      </div>
    </div>
  )
}
