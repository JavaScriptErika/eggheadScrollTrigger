import React, { useRef, useLayoutEffect } from 'react';
import logo from './eggheadLogoFull.svg'
import burger from '../../assets/hero/heroBurger.svg'
import './hero.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

    const heroBurgerRef = useRef()

    useLayoutEffect(() => {

        const heroBurgerElement = heroBurgerRef.current

        gsap.to(heroBurgerElement, {
            opacity: .2,
            y: 100,
            scrollTrigger: {
                trigger: heroBurgerElement,
                start: "start start"
            }
        })

        //reminder to do clean up function
        //look into live refresh -- scrolltrigger refresh
    },[])

    return (
        <div className="container text-center py-5">
            <div className="row py-5">
                <div className="col-md-8 offset-md-2 text-white">
                    <img src={logo} alt="egghead logo" className="img-fluid" style={{maxWidth: '20rem'}} />
                    <p className="d-inline h1"> bistro</p>
                    <p className="h3 py-2">presents the ultimately unreal</p>
                </div>
            </div>
    
            <div className="row mt-5">
                <div className="col-12">
                    <div className="d-inline-block text-white px-4 py-4 dotted-border">
                    <p className="text-white display-4">Badass Burger</p>
                    </div>
                </div>
            </div>

            <img src={burger} alt="" ref={heroBurgerRef} className="burgerBackground" />
        </div>
    )
}

export default Hero