'use client'

import ConnectButton from './connect-button';
import ImageSlideshow from './images-slideshow'
import { Pacifico } from 'next/font/google';
import { motion } from "motion/react"


const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], 
});

const stats = [
  { value: ['University of California, Irvine', <br />,'BS in Computer Science',  <br />, <strong>GPA: 4.0</strong>], title: 'Academic' },
  { value: ['JavaScript, Python, Java, C#, SQL'], title: 'Languages' },
  { value: ['React, Next.js, Flask, Django, ASP.NET, Firebase, AWS, Git, Docker'], title: 'Framework / Tools' },
]


const cardContainer = {
  // padding: 20,
  // borderRadius: 10,
  // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  // border: "1px solid #e17caa",
  // backgroundColor: "transparent",
};



export default function About() {
  return (
    <div className="bg-primary xl:p-32 md:p-8 p-4 " >
      <div className="relative isolate mb-4">
        <div className="px-6 py-14 lg:px-8">

          {/* intro paragraph & images slideshow */}
          <div className='flex xl:flex-row flex-col gap-4 justify-between items-center'> 
            
            <motion.div initial={{ opacity:0, x:-200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.7 }} >
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
                    <ConnectButton />
                  </a>

                </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
                <ImageSlideshow />
            </motion.div>
          </div>

          {/* stats */}
          <div className="mx-auto mt-12 max-w-2xl lg:mx-0 lg:max-w-none ">
            <dl className="mt-16 grid gap-8 sm:mt-20 grid-cols-2 lg:grid-cols-3 ">
              {stats.map((stat) => (
                <motion.div key={stat.title} style={cardContainer} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1.3, y: 0 }} transition={{ delay: 1, duration: 0.7 }} viewport={{ once: true}} className="flex flex-col-reverse justify-end">
                    <dt className="lg:text-base text-xs text-tertiary">
                    {stat.value.map((line, idx) => (
                        <span key={idx}>{line}</span>
                      ))}
                    </dt>
                    <dd className={`lg:text-2xl md:text-xl text-sm lg:mb-4 md:mb-2 mb-0 font-bold tracking-tight brightness-110 text-tertiary `}>{stat.title}</dd>
                </motion.div>

                // <div key={stat.title} className="flex flex-col-reverse justify-end">
                //   <dt className="lg:text-base text-xs text-tertiary">
                //     {stat.value.map((line, idx) => (
                //       <span key={idx}>{line}</span>
                //     ))}
                //   </dt>
                //   <dd className={`lg:text-2xl md:text-xl text-sm lg:mb-4 md:mb-2 mb-0 font-bold tracking-tight brightness-110 text-tertiary `}>{stat.title}</dd>
                // </div>
              ))} 
            </dl>
          </div>



          
          
        </div>
      </div>

    </div>
  )
}
