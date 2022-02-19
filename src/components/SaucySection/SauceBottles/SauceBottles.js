import React, { useRef, useLayoutEffect } from 'react';
import redSauce from './redSauce.svg'
import yellowSauce from './yellowSauce.svg'
import { Bounce, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './saucebottles.css'
gsap.registerPlugin(ScrollTrigger);

const SauceBottles = () => {
    const redSauceRef = useRef()
    const yellowSauceRef = useRef()

    useLayoutEffect(() => {
    //   //we're tweening the y axis, and for simpler scroll triggers, we can use scrolltrigger as property
    //   //
    //   gsap.to(redSauceRef.current, {
    //       transformOrigin: 'bottom left',
    //       rotate: -45,
    //       duration: 2,
    //     scrollTrigger: {
    //         trigger: redSauceRef.current,
    //         start: "top center",
    //         end: "top top"
    //   }
    // })
    // }, []);
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: redSauceRef.current,
          start: "top center",
          end: "top top",
    }
  })
  tl.to(redSauceRef.current, {transformOrigin: 'bottom left', rotation: -45, duration: 1, ease: "bounce.out"})
  }, []);
    

    
    return (
        <div className="bottles mt-5">
            <img ref={redSauceRef} src={redSauce} alt="" className="img-fluid redSauce" />
            <img ref={yellowSauceRef} src={yellowSauce} alt="" className="img-fluid yellowSauce" />
        </div>        
    )
}

export default SauceBottles