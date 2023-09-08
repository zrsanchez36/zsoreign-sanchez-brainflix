import React from "react";
import videoThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import UploadButton from "../Button";

function VideoUpload () {
    //const className = props.className;
    //const alt = props.alt
 
    // Handle form submission (you can add this functionality)
    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle video upload form submission here
  };
    return (
        <div className="upload--form__section">
            <div className="video__thumbnail--container" >
                <h3>Video Thumbnail</h3>
                <img src={videoThumbnail} className='upload__thumbnail' alt="thumbnail"></img>
            </div>
            <div className="upload__form--container">
                <form className="upload__form">
                    <h3>TITLE YOUR VIDEO</h3>
                    <textarea id="videoTitle" className="video__title" placeholder="Add a title to your video" required></textarea>
                    <h3>ADD A VIDEO DESCRIPTION</h3>
                    <textarea id="videoDescriptiob" className="video__description" rows="10" placeholder="Add a description to your video" required></textarea>
                    <div className="upload__button--container">
                        <UploadButton className= "upload__button" />
                    </div>
                    <div className="cancel__container"><h3>CANCEL</h3></div>
                </form>
            </div>
        </div>

    );


}


export default VideoUpload;