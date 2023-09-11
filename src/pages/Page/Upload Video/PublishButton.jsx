import React, { Component } from "react";
import {ReactComponent as UploadIcon } from '../../../assets/Icons/publish.svg';

function PublishButton(props) {
    const className = props.className;
    const label = props.label;
        return(
            <div className="upload__button--container">
                <button className={className} type="button">{label}</button>
                <div className="upload__icon--container"><UploadIcon /></div>
            </div>
        );
}

export default PublishButton;