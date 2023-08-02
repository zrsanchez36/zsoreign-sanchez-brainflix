import React, { Component } from "react";
import logo from '../../3.0 - Assets/Logo/BrainFlix-logo.svg';

function SiteLogo(props) {
    const className = props.className;
    const alt = props.alt
        return(
            <img src= {logo} className={className} alt={alt}></img>
        );
}

export default SiteLogo;