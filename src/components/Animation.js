import React from 'react'
import logo from './men.gif'
import './Nav.css'
import useWebAnimations from "@wellyshen/use-web-animations";
function Animation() {
    const sceneryFrames = [
        { transform: 'translateX(0%)' },
        { transform: 'translateX(400%)' }   
      ]
    const refBackground1 = useWebAnimations({

        keyframes: sceneryFrames,
        timing: {
            easing: 'ease-in-out',
            fill: 'both',
            duration: 30000,
            iterations: Infinity
          }
    });
    return (
        <div>
            <div className="wid">
            <img src={logo} ref={refBackground1.ref} alt="" className="scating"/>
            <hr />
            </div>
        </div>
    )
}

export default Animation
