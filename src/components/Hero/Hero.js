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
        const fireParentElementRef = burgerBoxRef.current.children[2]
        const fireSelector = gsap.utils.selector(fireParentElementRef) 

        let heroBurgerBadgeTL = gsap.timeline({
            scrollTrigger: {
                trigger: burgerBoxRef.current,
                start: "start start",
                end: "center top",
                markers: true,
                onUpdate: self => {
                    console.log(self.isActive)
                    if(!self.isActive) {
                        gsap.to(fireSelector(".flame"), 
                        {
                            transformOrigin: 'center center', 
                            rotate: "random(-3, 3, 1)", 
                            opacity: "random(.5, 1, .1)", 
                            yoyo:true,
                            repeat: -1 
                        }
                        );
                    }
       
                   }
            }
        })

        heroBurgerBadgeTL
            .to(heroBurgerElement, {opacity: .1, y: -30})
            .fromTo(burgerBadgeElement, { opacity: 0, scale: 3, y: 100}, { opacity: 1, scale: 1, y: 50}, "<")
            .fromTo(fireSelector(".flame"), 
                { y: '30rem', scale: .3, transformOrigin: 'center center', opacity: 0}, 
                { y: '10rem', scale: 1, opacity: 1, stagger: .1}, "<" )
    //     // toggleActions: "play none none none"
    //     // end: "top top"


        //ScrollTrigger.refresh(true)
        //reminder to do clean up function
        //look into live refresh -- scrolltrigger refresh
        //reminder to place in markers
        return () => {
            heroBurgerBadgeTL.scrollTrigger.kill()
        }
    },[])

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