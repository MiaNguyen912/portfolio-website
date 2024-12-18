import React from 'react'
import Image from 'next/image'
import classes from '@/styles/orbits-animation.module.css'
import webDevelopmentIcon from '@/assets/web_development_icon.png'

export default function OrbitsAnimation() {
    return (
        <div className="overflow-clip grid place-items-center min-h-[100vw] bg-primary ">
            <div className={classes.planet}>
                <Image src={webDevelopmentIcon} alt="web development icon" width={0} height={0} className="h-auto block" />
            </div>
            <div className={classes.moon}>
                <Image src={webDevelopmentIcon} alt="web development icon" width={0} height={0} className="h-auto block"/>
            </div>
            <div className={classes.satellite}>
                <Image src={webDevelopmentIcon} alt="web development icon" width={0} height={0} className="h-auto block"/>
            </div>
            <div className={classes.potato}>
                <Image src={webDevelopmentIcon} alt="web development icon" width={0} height={0} className="h-auto block"/>
            </div>
        </div>
    )
}
