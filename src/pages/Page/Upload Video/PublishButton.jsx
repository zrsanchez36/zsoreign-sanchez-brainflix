import React, { Component } from "react";
import {ReactComponent as UploadIcon } from '../../../assets/Icons/publish.svg';

function PublishButton(props) {
    const className = props.className;
    const label = props.label;
    const type = props.type;
        return(
            <div className="upload__button--container">
                <button className={className} type={type}>{label}</button>
                <div className="upload__icon--container"><UploadIcon /></div>
            </div>
        );
}

export default PublishButton;