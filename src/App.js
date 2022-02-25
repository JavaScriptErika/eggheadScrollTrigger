import React, {useRef, useLayoutEffect } from 'react';
import './App.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Fire from './components/Fire/Fire'
import SaucySection from './components/SaucySection/SaucySection';
import topBun from './components/burgerPNG/0-top.png'
import lettuceMiddle from './components/burgerPNG/3-lettuce.png'
import tomatoLeft from './components/burgerPNG/5-leftTomato.png'
import cheese from './components/burgerPNG/7-cheese.png'
import patty from './components/burgerPNG/8-patty.png'
import bottomBun from './components/burgerPNG/9-bottomBun.png'


gsap.registerPlugin(ScrollTrigger);

// Demo Dependencies
// GSAP
// https://stackoverflow.com/questions/40037657/how-to-include-bootstrap-css-and-js-in-reactjs-app




function App() {

  
  const topBunRef = useRef()
  const tomatoLeftRef = useRef()
  const cheeseRef = useRef()
  const pattyRef = useRef()
  const bottomBunRef = useRef()


  const topBunTextRef = useRef()
  const burgerContainerRef = useRef()
  const lettuceMiddleRef = useRef()
  const lettuceTextRef = useRef()
  const tomatoTextRef = useRef()
  const cheeseTextRef = useRef()
  const bottomBunTextRef = useRef()


  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: burgerContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    })
    
    .to(".topBun",  { yPercent: 10 }, 0)
    .fromTo(".middleLettuce", {yPercent: 110}, {yPercent: 175}, 0)
    .fromTo(".tomatoLeft", { yPercent: 155 }, { yPercent: 300 }, 0)
    .fromTo(".cheese", { yPercent: 110 }, { yPercent: 250 }, 0)
    .fromTo(".patty", { yPercent: 80 }, { yPercent:  240 }, 0)
    .fromTo(".bottomBun", { yPercent: 95 }, { yPercent: 250 }, 0)


  }, []);


  return (
    <>
 
    <section style={{overflowY: 'hidden', position: 'relative', height: '100vh'}} className="d-flex">
      <Hero />
      {/* <Fire /> */}
    </section>


    <div className="border-yellow text-white text-center">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <p className="h1">Any day without our badass burger is a waste</p>
            </div>
          </div>
        </div>
      </div>

      <SaucySection />
      <section ref={burgerContainerRef} style={{paddingTop: '3rem'}}>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="burger" style={{minHeight: '10rem'}}>
            <img src={bottomBun} className="bottomBun ingredient img-fluid" ref={bottomBunRef} />
              
            <img src={patty} className="patty ingredient img-fluid" ref={pattyRef} />
            <img src={cheese} className="cheese ingredient img-fluid" ref={cheeseRef} />
            <img src={tomatoLeft} className="tomatoLeft ingredient img-fluid" ref={tomatoLeftRef} />
            <img src={lettuceMiddle} className="middleLettuce ingredient img-fluid" ref={lettuceMiddleRef} />
            <img src={topBun} className="topBun ingredient img-fluid" ref={topBunRef} />
            </div>
          </div>
          <div className="col-md-6 text-white" ref={topBunTextRef}>
            <p className="h1">It starts with a bun. And the bun is soft. So soft.</p>
            <p className="h1" ref={lettuceTextRef}>Lettuce. Lettuce give thanks for a bed of crisp. </p>
            <p className="h1" ref={tomatoTextRef}>You lucky dog, we slap 2 tomato slices on. Fresh from the garden. Rinsed of course.</p>
            <p className="h1" ref={cheeseTextRef}>The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare mystery.</p>
            <p className="h1" ref={bottomBunTextRef}>Like the beginning, it ends with a bun. And the bun is still soft. So soft.</p>
          </div>
        </div>
      </div>
    
      </section>

       <Footer className="mt-5"/>
    </>
  );
}

export default App;


// Lettuce. Lettuce give thanks for a bed of crisp. 
// You lucky dog, we slap 2 tomato slices on. Fresh from the garden. Rinsed of course.
// The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare beef.
//It end with a bun. And the bun is still soft. So soft.np