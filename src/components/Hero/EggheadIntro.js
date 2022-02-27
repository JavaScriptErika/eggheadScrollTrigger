import React from 'react';

const EggheadIntro = ({logo, intro}) => {
    return (
            <div className="row py-5">
                <div className="col-md-8 offset-md-2 text-white">
                    <img src={logo} alt="egghead logo" className="img-fluid" style={{maxWidth: '20rem'}} />
                    <p className="d-inline h1"> bistro</p>
                    <p className="h3 py-2">{intro}</p>
                </div>
            </div>
    )
}

export default EggheadIntro