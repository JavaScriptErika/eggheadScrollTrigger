import './fire.css'
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Fire = () => {
    const fireParentElementRef = useRef()
    const fireSelector = gsap.utils.selector(fireParentElementRef) 
    //Why use a scoped selector? We only need to use a single ref! Allows for cleaner code instead of multiple refs. 
    //Can pass a React ref or class to gsap.utils.selector
    //internally this looks like fireParentElement.current.querySelectorAll() but instead pf calling it on the document like we would in vanilla JavaScript, it's calling querySelectorAll
    //on the element.
    // gsap.utils returns a selector function, which in this case, we're referencing in our variable fireSelector, a reusable selector function
    // and it's scoped to each unique component instance. This beneficial and makes your components reusable 
    // so it will only look for descendants inside of our fire SVG, we need to give our selector function a class to select things! 
    // https://greensock.com/docs/v3/GSAP/UtilityMethods/selector()

    useLayoutEffect(() => {
      //we're tweening the y axis, and for simpler scroll triggers, we can use scrolltrigger as property
      //GSAP can animate any CSS property -- if there are hyphens in CSS properties you want to use, use camelCase 
      //With our selector function referenced in fireSelector, we need to tell it which descendants we want it to grab 
      gsap.to(fireSelector(".fire"), {
        scrollTrigger: {
            trigger: ".fire",
            // markers: true,
            start: "top bottom",
            toggleActions: "play restart restart pause"
            // toggleActions: "play none none none"
            // end: "top top"
      },
      yPercent: -50,
    //   stagger: .2,
      scale: 1.2,
      transformOrigin: 'center center',
      duration: .5,
    });

    },[])


    return (
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1283.69 402.8" ref={fireParentElementRef}>
                <g className="fire" >
                    <path d="M639.46 332v.12c-.93 5.52-.12 11.52 1.35 17.58 1.14 4.68 2.71 9.51 4.25 14.27.46 1.4.91 2.8 1.35 4.18 1.94 6.13 3.64 12.06 4.22 17.56a25.79 25.79 0 0 1-1.35 12.69c-15.87-16.19-38.74-23.12-60.39-29.69l-5.28-1.61c-24.14-7.41-45.76-15.23-55.52-35.28-14.26-31.74-19.14-55.17-18.5-75s6.78-36.11 14.85-53.68c1.79-3.89 3.67-7.85 5.61-11.91 15.09-31.71 15.55-69.93 17.21-138.51 20.69 40.06 49.46 82.2 57.61 118.42 1.54 6.88 3 13.55 4.37 20 2.42 11.19 4.67 21.56 7 30.78 3.62 14.46 7.45 26.34 12.5 34.29 12.93 23.51 16.97 50.09 10.72 75.79Z" className="cls-1"/>
                    <path d="m607.3 328.53-.12-.28-.2-.2c-15.32-15.54-17.83-36.38-15-56.53.89-8 5.22-25.8 12.06-48.82s16.11-51 26.85-79.46 22.93-57.26 35.55-81.78c11-21.45 22.36-39.48 33.25-51.13-12.31 37.7-13.19 82.59-8.73 123.05 4.71 42.73 15.42 80.77 25.13 100.47 12.32 29.57 13.67 61.56 3 91.15v.11c-3.3 11.72-10.46 20.44-18.77 28.88-2.05 2.09-4.18 4.16-6.34 6.26-6.45 6.28-13.14 12.78-18.65 20.48-6.29 5.48-13 7.92-19.58 8.07a33.92 33.92 0 0 1-18.54-5.47c1.57-11.29-4.06-20.44-10.75-28.83-1.73-2.17-3.56-4.31-5.37-6.44-1.8-2.11-3.58-4.2-5.27-6.32a57.68 57.68 0 0 1-8.52-13.21Z" className="cls-1"/>
                    <path d="M692.8 385.13a184.32 184.32 0 0 1-41.27 10.37c3.82-9.27 4-21.21 3.14-32.87-.48-6.41-1.3-12.81-2.06-18.75l-.09-.67c-.74-5.69-1.41-10.89-1.7-15.29v-.29l-.12-.26c-8-17.18-4.18-35.88 3.75-52.73 1.81-4.11 3.84-10.49 6.39-18.53 14.45-45.5 31-138 136.92-178-49.1 38.12-47.92 71.57-48.22 106.65-.16 18.43 3.34 35.53 7.14 50.39 1.15 4.47 2.33 8.79 3.45 12.86.73 2.65 1.43 5.21 2.08 7.65a128.08 128.08 0 0 1 3.51 16.34c1.67 28.7-5.94 57.11-23.36 79.88-11.95 15.64-31.14 26.32-49.56 33.25Z" className="cls-1"/>
                    <path d="M684.19 244.59a150.87 150.87 0 0 1 8.24 15.09 108.5 108.5 0 0 1 1.4 74.11v.05c-4.62 17-14.64 31.86-24.62 46.59-1.4 2.07-2.8 4.13-4.18 6.2-4.48 4.18-10.39 4.64-16.59 3.11a54 54 0 0 1-16.44-7.68c1.23-9.22-3-16.65-8-23.41-1.3-1.76-2.67-3.49-4-5.21-1.35-1.71-2.67-3.39-3.93-5.09a46.27 46.27 0 0 1-6.18-10.55l-.1-.27-.2-.22c-11.37-12.41-13-29.3-10.81-45.73.73-6.48 4.3-19.81 9.8-37.2s12.83-38.54 21.06-60.71c14.31-38.53 31.24-79.86 45.57-108.65-14.63 59.23-14.4 94.91-8.58 119.49a119.08 119.08 0 0 0 12.66 31.74c1.71 2.89 3.31 5.66 4.9 8.34Z" className="cls-2"/>
                    <path d="M649 390.63a30 30 0 0 1 .32 5.3c-11.58-8.6-26.34-14.72-40.76-20.69-2.57-1.07-5.14-2.14-7.67-3.21-17.75-7.51-34-15.44-43-28.22C541.64 321 535 304.57 533.77 291s3.07-24.31 9.34-36c1.67-3.13 3.48-6.31 5.36-9.61 11.35-19.92 25.15-44.14 25.62-86.66q2.58 8.08 5 15.79C593 217.61 604 252.07 607 283.75v.46l.28.36c2.81 3.6 7.15 11.66 12 22.1s10.18 23 15 35.51 9.07 25.05 11.82 35.25a108.62 108.62 0 0 1 2.9 13.2Z" className="cls-2"/>
                    <path d="M574.06 329.07c-9.76-12.66-14.61-23.31-16.35-33s-.41-18.45 2.42-27.5c1.93-6.17 4.52-12.35 7.3-19 1.33-3.18 2.7-6.45 4.07-9.88a173.93 173.93 0 0 0 8.57-27c4.08 20.53 13.7 35.36 22.2 48 .36.54.71 1.07 1.07 1.59 4.45 6.61 8.46 12.54 11.18 18.47 2.91 6.35 4.28 12.56 3.09 19.37l-.09.54.26.49c2.58 4.7 10.23 23.77 16.74 42.7 3.25 9.45 6.2 18.79 8.06 26.22a77.49 77.49 0 0 1 1.89 9.39c.09.68.14 1.29.17 1.83a114.33 114.33 0 0 0-13.07-10c-4.87-3.32-10.32-6.79-15.9-10.34-1.68-1.07-3.37-2.14-5.06-3.23-7.32-4.68-14.65-9.49-21.06-14.31s-11.88-9.65-15.49-14.34Z" className="cls-3"/>
                    <path d="M649.71 347.94v-.29l-.13-.27c-6-12.72-3.11-26.62 2.82-39.22 1.07-2.43 2.62-6.13 4.57-10.81 6.42-15.43 17.28-41.49 30.45-67.59 8.58-17 18.11-33.94 28-47.89 7.86-11.1 15.86-20.17 23.69-25.91-13.59 22.39-15.77 51.49-14.08 78.56a405.69 405.69 0 0 0 5.11 41.56c.72 4.26 1.43 8.28 2.09 12 1.27 7.15 2.34 13.25 2.92 18 .63 10.8.28 22.35-2.21 32.87s-7.13 19.93-15 26.55c-24.63 20.7-53 30.47-68 31.5h-.31l-.28.13a2 2 0 0 1-1 .28.5.5 0 0 1-.34-.15 5 5 0 0 1-1-2.75c-.56-3.18-.4-8.16.09-13.94.32-3.86.78-8 1.23-12 .21-2 .43-3.95.63-5.88a99.63 99.63 0 0 0 .75-14.75Z" className="cls-2"/>
                    <path d="M638.3 217c3.5-9.14 7.27-16.91 11.25-22.51-4.76 18.43-2.23 41 2.48 61.52 5.37 23.4 13.64 44.48 17.62 54.36a65.86 65.86 0 0 1-1 45v.1c-3.25 10.26-9.73 19-16.23 27.85-.86 1.17-1.73 2.34-2.59 3.52-2.63 2.21-6 2.37-9.64 1.32a32.09 32.09 0 0 1-9.33-4.81c.87-5.7-1.59-10.42-4.43-14.62-.76-1.12-1.56-2.23-2.34-3.3-.78-1.08-1.55-2.14-2.27-3.2a27.76 27.76 0 0 1-3.44-6.46l-.1-.28-.19-.22c-6.48-7.69-7.12-17.86-5.34-27.78.06-.37.12-.8.19-1.27 1.5-9.59 5.85-37.57 12.68-66.2 3.55-15.12 7.81-30.28 12.68-43.02Z" className="cls-3"/>
                    <path d="m654.2 332.52.06-.29v-.29c-1.34-8.24 2.54-15.78 8.1-22.14a39.24 39.24 0 0 0 4.3-7.5c1.62-3.39 3.48-7.63 5.53-12.42.72-1.67 1.46-3.42 2.23-5.22 3.61-8.47 7.74-18.16 12.26-27.74 5.48-11.61 11.5-23 17.81-31.75a61.83 61.83 0 0 1 9.51-10.85 31.7 31.7 0 0 1 2.59-2c-3.6 5.2-5.46 11.74-6.19 18.9-1 10.19.18 21.9 2.15 33.38 1.46 8.52 3.35 17 5.07 24.7.6 2.67 1.17 5.26 1.7 7.71 1 4.79 1.89 9.09 2.4 12.74a31.2 31.2 0 0 1 .34 8.46c-1.36 6.05-6.5 12.86-12.86 19.31a185.18 185.18 0 0 1-18.9 16.28c-3.79 3.36-9.22 6.45-15 9.24-4.63 2.24-9.39 4.25-13.59 6l-2 .84a28.09 28.09 0 0 1-5.32-6 36 36 0 0 1-3-6.12c3.06-3.79 3.32-8.29 3.09-12.53-.06-1.14-.16-2.28-.26-3.4s-.2-2.22-.25-3.3a22.87 22.87 0 0 1 .23-6.01Z" className="cls-3"/>
                </g>
                <g className="fire">
                    <path d="M1109.11 332v.12c-.93 5.52-.12 11.52 1.36 17.58 1.13 4.69 2.7 9.51 4.25 14.27.45 1.4.9 2.79 1.34 4.18 2 6.14 3.64 12.06 4.23 17.57a25.76 25.76 0 0 1-1.36 12.68c-15.87-16.19-38.74-23.12-60.39-29.68l-5.28-1.62c-24.13-7.4-45.76-15.23-55.52-35.27-14.26-31.75-19.13-55.18-18.5-75s6.79-36.11 14.85-53.67c1.79-3.9 3.67-7.86 5.61-11.92 15.09-31.71 33.28-69.93 34.94-138.51 20.69 40.07 31.74 82.2 39.88 118.43 1.55 6.87 3 13.55 4.37 20 2.42 11.19 4.67 21.56 7 30.78 3.62 14.46 7.45 26.34 12.51 34.29 12.93 23.49 16.96 50.07 10.71 75.77Z" className="cls-1"/>
                    <path d="m1077 328.53-.11-.27-.21-.21c-15.32-15.54-17.83-36.38-15-56.53.89-8 5.22-25.8 12.06-48.81s16.11-51 26.85-79.47 22.93-57.26 35.55-81.78c11-21.45 22.36-39.48 33.26-51.13-12.32 37.7-13.2 82.59-8.74 123.05 4.72 42.73 15.41 80.77 25.13 100.47 12.32 29.57 13.68 61.56 3 91.15v.11c-3.31 11.72-10.47 20.45-18.78 28.88-2 2.09-4.18 4.16-6.34 6.26-6.45 6.28-13.14 12.79-18.64 20.48-6.3 5.49-13 7.93-19.59 8.07a33.94 33.94 0 0 1-18.54-5.47c1.57-11.29-4-20.44-10.75-28.83-1.73-2.17-3.56-4.31-5.36-6.43l-.05-.06c-1.8-2.11-3.58-4.2-5.27-6.31a58 58 0 0 1-8.47-13.17Z" className="cls-1"/>
                    <path d="M1162.45 385.13a184.06 184.06 0 0 1-41.27 10.37c3.81-9.27 4-21.21 3.14-32.87-.48-6.41-1.3-12.81-2.06-18.75l-.09-.67c-.73-5.69-1.41-10.89-1.7-15.28v-.3l-.12-.26c-8-17.18-4.18-35.88 3.75-52.73 1.81-4.1 3.84-10.48 6.4-18.53 14.44-45.5 45.77-144.15 151.65-184.14-49.1 38.12-62.65 77.72-63 112.81-.17 18.42 3.33 35.52 7.14 50.38 1.14 4.48 2.32 8.79 3.44 12.86.73 2.66 1.43 5.22 2.08 7.65a126.38 126.38 0 0 1 3.51 16.37c1.67 28.7-5.93 57.11-23.36 79.89-11.89 15.59-31.09 26.27-49.51 33.2Z" className="cls-1"/>
                    <path d="M1153.85 244.59a152.92 152.92 0 0 1 8.24 15.09 108.5 108.5 0 0 1 1.39 74.11v.05c-4.62 17-14.65 31.86-24.63 46.59-1.4 2.07-2.8 4.14-4.18 6.21-4.48 4.17-10.38 4.63-16.59 3.11a54.4 54.4 0 0 1-16.42-7.74c1.24-9.21-3-16.65-8-23.41-1.3-1.76-2.67-3.49-4-5.2v-.05c-1.34-1.7-2.67-3.38-3.93-5.09a46 46 0 0 1-6.17-10.55l-.11-.27-.2-.22c-11.37-12.41-13-29.3-10.81-45.73.74-6.48 4.31-19.81 9.8-37.19s12.84-38.55 21.07-60.72c14.3-38.53 31.22-79.86 45.57-108.65-14.63 59.23-14.4 94.91-8.58 119.5a118.69 118.69 0 0 0 12.66 31.74c1.64 2.97 3.29 5.74 4.89 8.42Z" className="cls-2"/>
                    <path d="M1118.63 390.64a29.8 29.8 0 0 1 .32 5.29c-11.58-8.6-26.34-14.72-40.76-20.69l-7.67-3.2c-17.75-7.52-34-15.45-43-28.22-16.19-22.82-22.88-39.25-24.06-52.78s3.08-24.3 9.34-36c1.68-3.14 3.49-6.31 5.37-9.61 11.34-19.92 25.14-44.15 25.61-86.67q2.58 8.08 5.06 15.79c13.8 43.07 24.85 77.54 27.83 109.21v.46l.28.36c2.82 3.6 7.15 11.66 12 22.1s10.17 23 15 35.52 9.07 25.05 11.82 35.24a106.47 106.47 0 0 1 2.86 13.2Z" className="cls-2"/>
                    <path d="M1039.47 343.51c-9.77-12.66-14.61-23.3-16.36-33s-.41-18.46 2.42-27.5c1.93-6.17 4.52-12.35 7.3-19 1.33-3.18 2.71-6.46 4.07-9.89a172.18 172.18 0 0 0 8.57-27c4.09 20.53 13.7 35.36 22.2 48 .36.54.72 1.06 1.08 1.59 4.45 6.6 8.45 12.54 11.17 18.46 2.91 6.35 4.29 12.57 3.1 19.38l-.1.54.27.48c2.57 4.7 10.23 23.78 16.74 42.71 3.24 9.45 6.19 18.79 8.06 26.21a79.89 79.89 0 0 1 1.89 9.39c.08.69.13 1.3.16 1.84a114.14 114.14 0 0 0-13.04-9.98c-4.87-3.33-10.33-6.8-15.91-10.35-1.68-1.06-3.37-2.14-5-3.22-7.33-4.69-14.65-9.49-21.07-14.31s-11.94-9.66-15.55-14.35Z" className="cls-3"/>
                    <path d="M1119.36 347.94v-.29l-.12-.27c-6-12.72-3.12-26.62 2.8-39.21 1.08-2.43 2.62-6.13 4.57-10.81 6.42-15.43 17.28-41.49 30.46-67.59 8.57-17 18.1-33.94 28-47.88 7.85-11.1 15.86-20.18 23.68-25.91-13.59 22.38-15.77 51.48-14.08 78.55a408 408 0 0 0 5.12 41.56c.71 4.26 1.42 8.28 2.09 12 1.26 7.15 2.33 13.25 2.91 18 .63 10.8.29 22.35-2.21 32.87s-7.12 19.93-15 26.55c-24.63 20.7-53 30.47-68 31.51h-.31l-.27.13a2.22 2.22 0 0 1-1 .29.53.53 0 0 1-.34-.16 5.15 5.15 0 0 1-1-2.75c-.56-3.18-.39-8.16.09-13.94.32-3.85.78-8 1.23-12 .22-2 .44-3.95.64-5.87a99.61 99.61 0 0 0 .74-14.78Z" className="cls-2"/>
                    <path d="M1109.76 216.94c3.5-9.15 7.26-16.93 11.24-22.53-4.76 18.44-2.21 41 2.49 61.53 5.37 23.4 13.64 44.47 17.62 54.36a65.8 65.8 0 0 1-1 45v.05c-3.25 10.26-9.73 19.05-16.23 27.86l-2.6 3.52c-2.62 2.22-6 2.37-9.63 1.32a32 32 0 0 1-9.33-4.81c.87-5.7-1.59-10.42-4.44-14.63-.75-1.11-1.55-2.22-2.33-3.3-.78-1.08-1.55-2.14-2.27-3.2a27.44 27.44 0 0 1-3.45-6.46l-.09-.28-.19-.23c-6.48-7.69-7.13-17.85-5.34-27.77.06-.38.13-.8.2-1.27 1.49-9.59 5.84-37.57 12.68-66.2 3.53-15.06 7.8-30.21 12.67-42.96Z" className="cls-3"/>
                    <path d="m1119.61 352.92.06-.3-.05-.28c-1.33-8.24 2.55-15.78 8.11-22.14a40.34 40.34 0 0 0 4.29-7.51c1.62-3.38 3.48-7.63 5.53-12.41.72-1.68 1.47-3.42 2.23-5.22 3.62-8.47 7.74-18.16 12.26-27.74 5.49-11.61 11.51-23 17.82-31.76a62.15 62.15 0 0 1 9.54-10.82 31.41 31.41 0 0 1 2.58-2c-3.6 5.19-5.45 11.73-6.18 18.89-1 10.2.17 21.91 2.15 33.39 1.45 8.52 3.35 17 5.07 24.7.59 2.67 1.17 5.25 1.7 7.71 1 4.78 1.88 9.09 2.39 12.73a30.8 30.8 0 0 1 .34 8.46c-1.36 6-6.5 12.87-12.86 19.32a186.25 186.25 0 0 1-18.89 16.28c-3.79 3.36-9.22 6.46-15 9.24-4.63 2.25-9.39 4.25-13.59 6l-2 .85a28.17 28.17 0 0 1-5.33-6 36.33 36.33 0 0 1-3-6.12c3.07-3.79 3.32-8.29 3.09-12.53-.06-1.14-.16-2.29-.26-3.41s-.2-2.22-.25-3.3a22.41 22.41 0 0 1 .25-6.03Z" className="cls-3"/>
                </g>
                <g>
                    <path className="fire cls-1" d="M881.78 17.14c9 13.17 17.46 32.72 25.11 55.59 8.75 26.16 16.4 56.5 22.69 86.25s11.19 58.88 14.42 82.62 4.82 42 4.48 50.08c-.34 20.29-6 40.56-23.46 53.58l-.24.18-.15.25a57.68 57.68 0 0 1-10.26 11.7c-2 1.83-4.07 3.63-6.17 5.44l-.05.05c-2.12 1.82-4.24 3.66-6.29 5.55-7.89 7.27-14.83 15.46-15 26.85a34 34 0 0 1-19.17 2.59c-6.5-1.15-12.75-4.57-18.12-11-4.28-8.47-9.91-15.92-15.33-23.11-1.81-2.4-3.6-4.77-5.31-7.14-6.92-9.59-12.67-19.3-14.15-31.39v-.11c-6.09-30.87.12-62.29 16.8-89.64 12.61-18 29-54 40.13-95.48 10.57-39.23 16.52-83.73 10.07-122.86Z" data-name="fire"/>
                </g>
                <g>
                    <path className="fire cls-1" d="M72.24 192.44c15.28-28 20.7-64.78-6.4-114.35 77.23 73.45 61.49 164.16 54.25 205.94a168.85 168.85 0 0 0-2.49 17.17c-.36 16.47-5.19 32.87-20 43.34l-.23.17-.15.23c-2.21 3.38-5.13 7.27-8.33 11.51l-.34.46c-3.32 4.41-6.89 9.18-10.17 14.08-6 8.91-11.07 18.47-11.76 27.33a180.37 180.37 0 0 1-32.37-24.44C20.8 361.16 8.34 345.13 4.56 328c-5.51-24.94.28-50.5 14.5-72.64a117.38 117.38 0 0 1 10.4-11.62c1.66-1.68 3.43-3.44 5.26-5.27 2.81-2.79 5.78-5.75 8.78-8.85 10-10.28 20.71-22.48 28.74-37.18Z" data-name="fire"/>
                </g>
                <g className="fire">
                    <path d="M381.65 186.59C398.07 153.3 412 106 441.56 71.94c-14.51 67.06.89 117.41 8.11 151.78.93 4.39 1.83 8.67 2.65 12.88 3.72 19 5.87 36.27 1.84 55.66s-14.26 41-35.58 68.52c-14.22 17.19-37.1 19.71-62.3 21.24l-5.51.32c-22.6 1.3-46.46 2.67-65.69 14.67a25.85 25.85 0 0 1 1.67-12.65c1.86-5.21 4.9-10.57 8.23-16.08l2.29-3.74c2.62-4.26 5.28-8.59 7.49-12.87 2.85-5.55 5.05-11.19 5.45-16.78v-.12c0-26.4 10.12-51.27 28.28-71.13 6.78-6.55 13.29-17.19 20.21-30.4 4.4-8.42 9-18 14-28.28 2.86-5.9 5.83-12.05 8.95-18.37Z" className="cls-1"/>
                    <path d="M327.29 1.21c7.87 14.25 14.63 35 20.32 59 6.51 27.5 11.58 59.18 15.33 90.14s6.19 61.17 7.42 85.72 1.26 43.4.25 51.6c-2.05 20.72-9.36 41-27.9 52.76l-.25.16-.18.24A58.27 58.27 0 0 1 331.07 352c-2.14 1.7-4.37 3.36-6.61 5h-.06c-2.25 1.68-4.53 3.38-6.72 5.13-8.48 6.74-16.1 14.52-17.23 26.16a33.15 33.15 0 0 1-19.32 1c-6.37-1.73-12.31-5.78-17.12-12.77-3.55-9-8.53-17.13-13.33-25-1.6-2.61-3.18-5.19-4.69-7.76-6.09-10.41-11-20.83-11.44-33.31v-.12c-3.47-32.1 5.36-63.68 24.29-90.2 14.09-17.31 33.44-52.66 48.05-94.15 13.83-39.21 23.52-84.2 20.4-124.77Z" className="cls-1"/>
                    <path d="M237.77 166.46c7.95-34.17 18.73-45.93-20-94.52 93.61 63.81 86.18 137.2 89.51 184.78.59 8.38 1.05 15 1.85 19.44 3.74 18.21 3.11 37.33-8.75 52.13l-.18.23-.09.28c-1.31 4.21-3.2 9.13-5.26 14.51l-.22.59c-2.14 5.58-4.44 11.62-6.41 17.73-3.59 11.12-6.2 22.78-4.67 32.68a183.82 183.82 0 0 1-37.65-19.77c-16.28-11.06-32.42-25.95-40.36-43.95-11.59-26.23-12.3-55.63-3.93-83.14a127.57 127.57 0 0 1 7.25-15.09c1.2-2.22 2.48-4.54 3.82-7 2-3.69 4.2-7.6 6.36-11.67 7.15-13.48 14.56-29.28 18.73-47.23Z" className="cls-1"/>
                    <path d="M313.79 207.21c11.44-22.53 20-57.16 19.73-118.17 7.17 31.34 13.91 75.48 18.75 116.29 2.79 23.49 5 45.85 6.21 64s1.59 32 .79 38.47c-1.66 16.49-7.28 32.52-21.25 41.91l-.25.17-.17.23a45.87 45.87 0 0 1-8.47 8.81c-1.63 1.35-3.31 2.68-5 4h-.05c-1.71 1.35-3.45 2.72-5.12 4.12-6.44 5.41-12.27 11.64-13.23 20.89a54.12 54.12 0 0 1-17.77 3.66c-6.39 0-12-1.81-15.4-6.92q-1.28-3.47-2.58-6.93c-6.24-16.69-12.51-33.48-13-51.16v-.1a108.49 108.49 0 0 1 18.76-71.71 154.2 154.2 0 0 1 11.57-12.74c2.18-2.22 4.43-4.53 6.74-7a118.65 118.65 0 0 0 19.74-27.82Z" className="cls-2"/>
                    <path d="m371.26 370.37-1-1.18c-11.82 10.3-29.45 14.19-48.47 17.32-2.72.45-5.46.88-8.22 1.31-15.41 2.42-31.19 4.9-44.47 10.53a29.88 29.88 0 0 1 1.56-5.07 107.84 107.84 0 0 1 5.87-12.17c5.07-9.26 12.15-20.4 19.77-31.48s15.76-22.05 22.91-31 13.3-15.81 16.88-18.65l.36-.29.15-.43c10.34-30.09 29.18-61 52.72-99.61l8.62-14.17c-9.54 41.44-1.81 68.23 4.53 90.26 1.06 3.65 2.07 7.17 3 10.6 3.34 12.86 4.93 24.38.62 37.21s-14.69 27.27-35.79 45.64Z" className="cls-2"/>
                    <path d="M250 219.28c8-25.92 12.72-54.71 4.78-79.66 6.25 7.41 11.88 18.11 16.91 30.74 6.33 15.88 11.61 34.58 16 53.12 6.68 28.48 11.12 56.4 13.74 72.9.79 5 1.42 8.93 1.89 11.54 2.8 13.62 2.31 27.81-6.48 38.78l-.3.37v.34a101.88 101.88 0 0 0-2.62 14.33c-.25 1.91-.5 3.88-.75 5.86-.51 4-1 8.14-1.62 12-.89 5.73-1.9 10.61-3.19 13.57a5.1 5.1 0 0 1-1.66 2.43.49.49 0 0 1-.38.07 2.08 2.08 0 0 1-.89-.5l-.23-.19-.29-.09c-14.37-4.54-39.7-20.71-58.74-46.61-6.09-8.29-8.39-18.51-8.34-29.34s2.43-22.13 5.58-32.48c1.67-4.45 4.15-10.12 7.06-16.78 1.52-3.48 3.15-7.22 4.85-11.19A404.48 404.48 0 0 0 250 219.28Z" className="cls-2"/>
                    <path d="M318 255.07c9.4-18.85 17.18-40.2 16.87-59.24 2.56 6.38 4.4 14.84 5.66 24.55 1.74 13.54 2.32 29.27 2.27 44.71-.08 29.36-2.43 57.52-3.24 67.26 0 .5-.08.95-.11 1.35-.6 10.06-3.61 19.8-11.72 25.74l-.24.18-.16.25a27.41 27.41 0 0 1-4.86 5.48c-1 .88-2 1.73-3 2.6-1 .87-2 1.75-3 2.67-3.76 3.41-7.26 7.42-7.75 13.15a31.55 31.55 0 0 1-10.2 2.49c-3.78.17-7-.78-9.06-3.55q-.89-2.16-1.8-4.31c-4.2-10-8.38-20-9.12-30.61v-.11a65.85 65.85 0 0 1 9.6-43.95c6.19-8.65 19.18-27.18 29.86-48.66Z" className="cls-3"/>
                    <path d="M266.37 242.17c1-7.13.7-13.92-1.57-19.81a30.76 30.76 0 0 1 2 2.55 62.05 62.05 0 0 1 6.74 12.76c4.07 10 7.25 22.47 9.84 35.05 2.15 10.37 3.89 20.76 5.41 29.85.32 1.92.63 3.79.94 5.59.87 5.13 1.67 9.69 2.45 13.37a40.45 40.45 0 0 0 2.42 8.3c3.91 7.49 5.91 15.73 2.67 23.42l-.11.28v.29a23.07 23.07 0 0 1-1.13 6c-.31 1-.66 2.08-1 3.15-.36 1.06-.73 2.16-1.05 3.25-1.23 4.07-2 8.51.05 12.91a36.46 36.46 0 0 1-4.35 5.24 27.84 27.84 0 0 1-6.59 4.57l-1.73-1.28c-3.67-2.7-7.84-5.78-11.82-9.05-4.94-4.06-9.49-8.34-12.39-12.5v-.05a191 191 0 0 1-14.54-20.28c-4.67-7.76-8.06-15.58-8-21.78a32 32 0 0 1 2.34-8.15c1.36-3.42 3.21-7.4 5.33-11.81 1.08-2.22 2.22-4.55 3.4-7 3.5-7.13 7.35-15 10.79-23 4.6-10.62 8.53-21.71 9.9-31.87ZM379.23 286.57c.81 8.67 2.06 17.32 3.19 25.18.38 2.65.75 5.22 1.09 7.66.67 4.85 1.19 9.2 1.43 12.88a32 32 0 0 1-.27 8.48c-1.82 5.92-7.46 12.31-14.29 18.26a191.27 191.27 0 0 1-20.09 14.82c-4 3.06-9.69 5.74-15.64 8.08-4.8 1.89-9.71 3.53-14 5l-2.05.68a28 28 0 0 1-4.86-6.37 36 36 0 0 1-2.52-6.33c3.34-3.55 3.94-8 4-12.27v-6.73a22.72 22.72 0 0 1 .77-6.05l.08-.28v-.3c-.71-8.31 3.73-15.53 9.75-21.45a39.69 39.69 0 0 0 4.85-7.16c1.88-3.25 4-7.34 6.46-12l2.61-5c4.25-8.18 9.1-17.53 14.34-26.73 6.34-11.17 13.21-22.05 20.16-30.32a61.93 61.93 0 0 1 10.34-10.06 31.21 31.21 0 0 1 2.73-1.8c-4 4.91-6.32 11.29-7.6 18.37-1.89 10.09-1.57 21.87-.48 33.44Z" className="cls-3"/>
                </g>
            </svg>
    )
}

export default Fire