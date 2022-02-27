import React from 'react';

const BadassBurger = React.forwardRef((props, ref) => {
    return (

        <div style={{border: '2px solid red'}} ref={ref} className="burgerBox">
            <div className="text-white px-4 py-4 dotted-border" >
                <p className="text-white display-4">Badass Burger</p>
            </div>
            <img src={props.img} alt="egghead's badass burger" />
        </div>
    )
})

export default BadassBurger
