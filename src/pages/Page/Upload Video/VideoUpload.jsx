import React, {useState} from "react";
import videoThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import PublishButton from '../Upload Video/PublishButton';
import './UploadVideo.css';
import {ReactComponent as PublishIcon}from '../../../assets/Icons/publish.svg';
import axios from "axios";

function VideoUpload () {
    //const className = props.className;
    //const alt = props.alt
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const videoData = {
        title: title,
        description: description,
        image: 'http://localhost:3000/images/default-image.jpg', // Hardcoded Image Path
        views: 0, 
        likes: 0, 
    };

    try {
        const response = await axios.post('http://localhost:3000/videos', videoData);
        console.log('Video added: ', response.data);
        setTitle('');
        setDescription('');
    } catch (error) {
        console.error('Error adding video: ', error);
        }
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
                    <form className="upload__form" onSubmit={handleSubmit}>
                        <div className="form__section">
                            <h3>TITLE YOUR VIDEO</h3>
                            <textarea id="videoTitle" className="video__title" placeholder="Add a title to your video"  value={title} onChange= {(e) => setTitle(e.target.value)} required></textarea>
                            <h3>ADD A VIDEO DESCRIPTION</h3>
                            <textarea id="videoDescription" className="video__description" rows="10" placeholder="Add a description to your video" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
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


};


export default VideoUpload;