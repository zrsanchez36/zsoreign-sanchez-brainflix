import React, { Component } from "react";
import {ReactComponent as UploadIcon } from '../../assets/Icons/upload.svg';

function UploadButton(props) {
    const className = props.className;
    const label = props.label;
        return(
            <div className="header__button--container">
                <div className="upload__icon--container"><UploadIcon /></div>
                <button className={className} type="button">{label}</button>
            </div>
        );
}

export default UploadButton;