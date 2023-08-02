import React, { Component } from "react";


function UploadButton(props) {
    const className = props.className;
    const label = props.label;
        return(
            <button className={className} type="button">{label}</button>
        );
}

export default UploadButton;