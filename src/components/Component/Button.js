import React, { Component } from "react";


function UploadButton(props) {
    const className = props.className;
    const label = props.label;
        return(
            <div className="header__button--container">
                <button className={className} type="button">{label}</button>
            </div>
        );
}

export default UploadButton;