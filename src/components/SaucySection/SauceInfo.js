import React, { useEffect, useRef, useLayoutEffect } from 'react';
import ButtonDrip from '../ButtonDrip/ButtonDrip';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const SauceInfo = () => {
    const sauceTextRef = useRef()

    useLayoutEffect(() => {

        gsap.from(sauceTextRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
          scrollTrigger: {
              trigger: sauceTextRef.current,
              start: "top center",
              end: "top top"
        }
      })
      }, []);
  
    return (
        <>
            <p ref={sauceTextRef} className="h3 text-white mt-5 saucyDescription"> 
                ps. our saucy house sauce begs to be ordered on the side (you know, for fry-dipping purposes).
            </p>
            <ButtonDrip text="grab a bottle" href="#" />
        </>
    )
}

export default SauceInfo