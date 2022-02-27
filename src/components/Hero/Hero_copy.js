// import React, { useRef, useLayoutEffect } from 'react';
// import logo from './eggheadLogoFull.svg'
// import burger from '../../assets/hero/heroBurger.svg'
// import './hero.css'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger);


// const Hero = () => {

//     const burgerBoxRef = useRef()
//     const heroBurgerRef = useRef()
//     const burgerBadgeRef = useRef()

//     useLayoutEffect(() => {

//         const burgerBoxElement = burgerBoxRef.current
//         const heroBurgerElement = heroBurgerRef.current
//         const burgerBadgeElement = burgerBadgeRef.current

//         let heroBurgerBadgeTL = gsap.timeline({
//             scrollTrigger: {
//                 trigger: burgerBoxElement,
//                 start: "start start"
//             }
//         })

//         heroBurgerBadgeTL
//             .to(heroBurgerElement, {opacity: .1, y: -30})
//             .fromTo(burgerBadgeElement, { opacity: 0, scale: 3, y: 100}, { opacity: 1, scale: 1, y: 50}, "<")

        // gsap.to(heroBurgerElement, {
        //     opacity: .1,
        //     y: -30,
        //     scrollTrigger: {
        //         trigger: burgerBoxElement,
        //         start: "start start"
        //     }
        // })

        // gsap.fromTo(burgerBadgeElement, 
        // //from - or the starting values
        // {
        //     opacity: 0,
        //     scale: 3,
        //     y: 100
        // }, 
        // //to - or the ending values
        // {
        //     opacity: 1,
        //     scale: 1,
        //     y: 50,

        // },
        // scrollTrigger: {
        //     trigger: burgerBoxElement,
        //     start: "start start"
        // }
        
        // );
        //ScrollTrigger.refresh(true)
        //reminder to do clean up function
        //look into live refresh -- scrolltrigger refresh
        //reminder to place in markers
//     },[])

//     return (
//         <div className="container text-center py-5">
//             <div className="row py-5">
//                 <div className="col-md-8 offset-md-2 text-white">
//                     <img src={logo} alt="egghead logo" className="img-fluid" style={{maxWidth: '20rem'}} />
//                     <p className="d-inline h1"> bistro</p>
//                     <p className="h3 py-2">presents the ultimately unreal</p>
//                 </div>
//             </div>
    

//             <div style={{border: '2px solid red'}} ref={burgerBoxRef} className="burgerBox">
//                 <div className="text-white px-4 py-4 dotted-border" ref={burgerBadgeRef}>
//                     <p className="text-white display-4">Badass Burger</p>
//                 </div>
//                 <img src={burger} alt="" ref={heroBurgerRef} />
//             </div>

        

//         </div>
//     )
// }

// export default Hero