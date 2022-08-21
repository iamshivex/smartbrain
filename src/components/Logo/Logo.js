import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css"
import brain from "./brain.png"

const Logo = () => {
    return (
        <div className="ma4 mt0 fl">
            <Tilt className="Tilt br3 shadow-2"style={{ height: '150px' }}>
                <div className="Tilt-inner pv2 ph2">
                    <img style={{paddingTop: "5px"}} alt="brainlogo" src={brain} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
