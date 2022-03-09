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
                    !self.isActive ? burgerFlamesTL.play() : burgerFlamesTL.pause()
                   }
            }
        })

        let burgerFlamesTL = gsap.timeline({ repeat: -1, yoyo: true})
        gsap.set(fireSelector(".flame"), {transformOrigin: 'center center'})
        //gsap set

        burgerFlamesTL
            .to(fireSelector(".flame"), {
                rotate: "random(-3, 3, 1)", 
                duration: 2,
                // stagger: .4,
                ease: "back.out(1.7)",
            })
            .to(fireSelector(".flame"), 
                {
                opacity: "random(.75, 1, .1)", 
                duration: 3,
                // stagger: .4,
               // ease: "elastic.inOut(1, 0.5)",
            }, 0)

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
            burgerFlamesTL.scrollTrigger.kill()
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