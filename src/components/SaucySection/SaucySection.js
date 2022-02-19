import React, { useEffect, useRef, useLayoutEffect } from 'react';
import SauceInfo from './SauceInfo';
import SauceBottles from './SauceBottles/SauceBottles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const SaucySection = () => {
    return (
        <>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-6">
                        <SauceInfo />
                    </div>

                    <div className="col-md-6">
                        <SauceBottles />
                    </div>

                </div>
            </div>
        </>
    )
}

export default SaucySection