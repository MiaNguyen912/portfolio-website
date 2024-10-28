'use client'

import ImageSlideshow from './images-slideshow'
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], 
});

const stats = [
  { value: ['University of California, Irvine', <br />,'BS in Computer Science'], title: 'Academic' },
  { value: ['4.0'], title: 'GPA' },
  { value: ['JavaScript, Python, SQL'], title: 'Languages' },
  { value: ['React, Next.js, Flask, Django'], title: 'Framework / Tools' },
]



export default function About() {
  return (
    <div className="bg-primary xl:p-32 md:p-8 p-4 " >
      <div className="relative isolate mb-4">
        <div className="px-6 py-14 lg:px-8">

          <div className='flex xl:flex-row flex-col gap-4 justify-between items-center'> 
            <div className="relative text-left lg:mr-10 mr:0">
              <h2 className={`text-4xl font-bold tracking-tight brightness-125 text-tertiary sm:text-6xl ${pacifico.className}`}>About me</h2>
              <p className="mt-6 lg:text-lg text-sm text-secondary">
                I&apos;m a senior Computer Science student at the University of California, Irvine, passionate about 
                crafting innovative web applications and tackling complex technical challenges. With hands-on 
                experience in both front-end and back-end development through internships and personal projects, 
                I specialize in cutting-edge frameworks like React, Next.js, and Tailwind CSS, alongside strong 
                proficiency in programming languages such as JavaScript, Python, Java, and C++.
              </p>
              <p className="mt-6 lg:text-lg text-sm text-secondary">
                Beyond tech, I love exploring the world, whether it&apos;s hiking through beautiful landscapes, traveling 
                to new destinations, or diving into different cuisines. 
              </p>
              <p className="my-6 lg:text-lg text-sm  text-secondary">
                As a software engineer, I&apos;m eager to continue growing and learning, particularly in front-end and 
                full-stack development. I am excited to bring creative solutions and technical expertise to 
                impactful projects. 
              </p>
              <a className="lg:text-lg text-sm text-secondary hover:text-shadow-glow-pink" onClick={() =>{scrollToElement('contact')}} >
                Let&apos;s connect!
              </a>

            </div>

            <ImageSlideshow />
          </div>



          <div className="mx-auto mt-12 max-w-2xl lg:mx-0 lg:max-w-none ">
            <dl className="mt-16 grid gap-8 sm:mt-20 grid-cols-2 lg:grid-cols-4 ">
              {stats.map((stat) => (
                <div key={stat.title} className="flex flex-col-reverse justify-end">
                  <dt className="lg:text-base text-xs text-tertiary">
                    {stat.value.map((line, idx) => (
                      <span key={idx}>{line}</span>
                    ))}
                  </dt>
                  <dd className={`lg:text-2xl md:text-xl text-sm lg:mb-4 md:mb-2 mb-0 font-bold tracking-tight brightness-110 text-tertiary `}>{stat.title}</dd>
                </div>
              ))}
            </dl>
          </div>
          
        </div>
      </div>

    </div>
  )
}
