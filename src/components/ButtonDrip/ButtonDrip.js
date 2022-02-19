import React, { useEffect, useRef, useLayoutEffect } from 'react';
import drip from './drip.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './buttondrip.css'
gsap.registerPlugin(ScrollTrigger);

const ButtonDrip = ( {href, text} ) => {

    const buttonRef = useRef()
    const dripRef = useRef()

    useLayoutEffect(() => {

        gsap.from(buttonRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
          scrollTrigger: {
              trigger: buttonRef.current,
              start: "top center",
              end: "top top"
        }
      })
      }, []);

    return (
        <div className="btn-orange btn-skewed mt-5" ref={buttonRef}>
            <a href={href} className="text-white h3"> {text} </a>
            <img className="drip" src={drip} alt="" ref={dripRef} />
        </div>
    )
}

export default ButtonDrip