import React, { useEffect, useRef, useLayoutEffect } from 'react';
import './App.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import SVG from './components/burger/SVG';
// import BottomBun from './components/burger/BottomBun';
// import Patty from './components/burger/Patty';
// import Cheese from './components/burger/Cheese';
// import Tomatoes from './components/burger/Tomatoes';
// import Lettuce from './components/burger/Lettuce'
// import TopBun from './components/burger/TopBun';
import logo from './assets/logo/eggheadLogoFull.svg'
import Fire from './components/Fire/Fire'
// import { ReactComponent as Logo } from './logo/eggheadLogo.svg';
gsap.registerPlugin(ScrollTrigger);

// Demo Dependencies
// GSAP
// https://stackoverflow.com/questions/40037657/how-to-include-bootstrap-css-and-js-in-reactjs-app

function App() {
  // const top_bun = useRef(null)
  // const patty = useRef(null)
  // const cheese = useRef(null)
  // const bottom_bun = useRef(null)
  // const tomato = useRef(null)
  // const lettuce = useRef(null)



  return (
    <>
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

      {/* <h1 style={{color: 'white', fontSize: '5rem'}}>Egghead Bistro</h1>
        <SVG>
          <BottomBun />
          <Patty />
          <Cheese />
          <Tomatoes />
          <Lettuce />
          <TopBun />
        </SVG> */}
    </div>

    <section style={{overflowY: 'hidden', position: 'relative', height: '80vh'}} className="d-flex">
      <Fire />
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

      <div style={{height: '500rem'}}></div>
    </>
  );
}

export default App;
