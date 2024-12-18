import React from 'react'
import classes from '@/styles/connect-button.module.css'
import { motion } from "motion/react"


const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
      block: "start",     // Align at the start of the element
    });
  };

const ConnectButton = () => {
  return (
    <div>
        {/* <button className={classes["shiny-cta"]} onClick={() =>{scrollToElement('contact')}}>
            <span >Let&apos;s connect!</span>
        </button> */}

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')} className={classes["shiny-cta"]} onClick={() =>{scrollToElement('contact')}}>
            <span >Let&apos;s connect!</span>
        </motion.button>
    </div>

    
  )
}

export default ConnectButton