'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from '@/styles/images-slideshow.module.css';

import image1 from '@/assets/profile_image_1.jpg';
import image2 from '@/assets/profile_image_2.JPG';
import image3 from '@/assets/profile_image_3.jpg';
import image4 from '@/assets/profile_image_4.jpg';
import image5 from '@/assets/profile_image_5.jpg';
import image6 from '@/assets/profile_image_6.jpg';
import image7 from '@/assets/profile_image_7.jpg';

const images = [
  { image: image1, alt: 'profile image' },
  { image: image2, alt: 'profile image' },
  { image: image3, alt: 'profile image' },
  { image: image4, alt: 'profile image' },
  { image: image5, alt: 'profile image' },
  { image: image6, alt: 'profile image' },
  { image: image7, alt: 'profile image' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);  // This is a cleanup function, runs when the component is unmounted (or before re-running the effect). It ensures that the interval is cleared, preventing memory leaks or multiple intervals from stacking up.
  }, []);

  return (
    <div>
      <div  className={`${classes.slideshow} mt-10 lg:w-[28vw] lg:h-[28vw] md:w-[40vw] md:h-[40vw] w-[60vw] h-[60vw] relative`}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            height={0}
            width={0}
            className={`${index === currentImageIndex ? classes.active : ''} w-full h-full`}
            alt={image.alt}
          />
        ))}

         
      </div>
    </div>

  );
}