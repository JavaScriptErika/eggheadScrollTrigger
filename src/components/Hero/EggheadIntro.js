import React from 'react';

const EggheadIntro = ({logo, intro}) => {
    return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3rem'}}>
                <div>
                    <img src={logo} alt="egghead.io logo" style={{width: '20rem'}} />
                    <p style={{display: 'inline-block', paddingLeft: '1rem', color: '#fff', fontSize: '2rem'}}>bistro</p>
                </div>

                <h2 style={{color: '#fff', paddingTop: '1rem'}}>{intro}</h2>
            </div>
    )
}

export default EggheadIntro