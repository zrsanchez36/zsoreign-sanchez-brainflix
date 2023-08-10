import React from "react";
import userImg from '../../assets/Images/Mohan-muruge.jpg';

function UserImage(props) {
    const className = props.className;
    const alt = props.alt;
        return(
            <img src= {userImg} className={className} alt={alt}></img>
        );
}

export default UserImage;