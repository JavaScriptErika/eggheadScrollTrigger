import React, { useRef, useLayoutEffect } from 'react';
import EggheadIntro from './EggheadIntro';
import BadassBurger from './BadassBurger';
import logo from '../../assets/hero/eggheadLogoFull.svg'
import heroBurgerSvg from '../../assets/hero/heroBurger.svg'
import './hero.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

    const burgerBoxRef = useRef(null)

    useLayoutEffect(() => {
        
        const burgerBadgeElement = burgerBoxRef.current.children[0]
        const heroBurgerElement = burgerBoxRef.current.children[1]

        let heroBurgerBadgeTL = gsap.timeline({
            scrollTrigger: {
                trigger: burgerBoxRef.current,
                start: "start start"
            }
        })

        heroBurgerBadgeTL
            .to(heroBurgerElement, {opacity: .1, y: -30})
            .fromTo(burgerBadgeElement, { opacity: 0, scale: 3, y: 100}, { opacity: 1, scale: 1, y: 50}, "<")

        //ScrollTrigger.refresh(true)
        //reminder to do clean up function
        //look into live refresh -- scrolltrigger refresh
        //reminder to place in markers
        return () => {
            heroBurgerBadgeTL.scrollTrigger.kill()
        }
    },[])


    
    console.log(burgerBoxRef.current)
    return (
        <>  
            <EggheadIntro 
                logo={logo}
                intro="presents the ultimately unreal"  
            />

            <BadassBurger ref={burgerBoxRef} img={heroBurgerSvg} burgerBoxRef={burgerBoxRef} />

        </>

    )
}

export default Hero