import React from 'react'
import classes from './connect-button.module.css'

const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
      block: "start",     // Align at the start of the element
    });
  };

const ConnectButton = () => {
  return (
    <div>
        <button className={classes["shiny-cta"]} onClick={() =>{scrollToElement('contact')}}>
            <span >Let&apos;s connect!</span>
        </button>
    </div>
  )
}

export default ConnectButton