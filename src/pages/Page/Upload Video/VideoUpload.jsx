import React from "react";
import videoThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import PublishButton from '../Upload Video/PublishButton';
import './UploadVideo.css';
import {ReactComponent as PublishIcon}from '../../../assets/Icons/publish.svg';

function VideoUpload () {
    //const className = props.className;
    //const alt = props.alt
 

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle video upload form submission here
  };
    return (
        <section className="upload__video--section">
            <div className="upload__section--title">
                    <h1>Upload Video</h1>
                </div>
            <div className="upload__form--section">
                {/* <hr className="top__divider"></hr> */}
                <div className="video__thumbnail--container" >
                    <h3 className="video__thumbnail--title">Video Thumbnail</h3>
                    <div className="upload__thumbnail--container">
                        <img src={videoThumbnail} className='upload__thumbnail' alt="thumbnail"></img>
                    </div>
                </div>
                <div className="upload__form--container">
                    <form className="upload__form">
                        <div className="form__section">
                            <h3>TITLE YOUR VIDEO</h3>
                            <textarea id="videoTitle" className="video__title" placeholder="Add a title to your video" required></textarea>
                            <h3>ADD A VIDEO DESCRIPTION</h3>
                            <textarea id="videoDescriptiob" className="video__description" rows="10" placeholder="Add a description to your video" required></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div className="buttons_container">  
                            <div className="button__items--container">
                                <div className="upload__icon--container"><PublishIcon/></div>
                                <PublishButton className= "publish__button" label='PUBLISH' />
                            </div>
                            <div className="cancel__container"><h2>CANCEL</h2></div>
                        </div>  
        </section>
    );


}


export default VideoUpload;