import React, { Component } from "react";
import logo from '../../assets/Logo/BrainFlix-logo.svg';

function SiteLogo(props) {
    const className = props.className;
    const alt = props.alt
        return(
            <div className="header__logo--container">
                <img src= {logo} className={className} alt={alt}></img>
            </div>
        );
}

export default SiteLogo;