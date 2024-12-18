import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './Brain.png';

const Logo = ()=>{
    return(
        <div className="ma4 mt0" style={{height: '', width: '120px',}}>
             <Tilt tiltReverse={true}>
                <div className="br2 shadow-2 tilt ma4 mt0 grow">
                    <img alt='logo' src={Brain}/>
                </div>
             </Tilt>
        </div>
    );
}

export default Logo; 