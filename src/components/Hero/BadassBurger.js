import React from 'react';
import Fire from '../Fire/Fire';

const BadassBurger = React.forwardRef((props, ref) => {
    return (
        <div style={{border: '2px solid red'}} ref={ref} className="burgerBox">
            <div className="dotted-border">
                <p style={{fontSize:'1.7rem', padding: '1rem 1rem 1rem 6rem', color:'white'}}>Badass Burger</p>
            </div>
            <img src={props.img} alt="egghead's badass burger" />
            <Fire burgerBoxRef={props.burgerBoxRef} />
        </div>
    )
})

export default BadassBurger
