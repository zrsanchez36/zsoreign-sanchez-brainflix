import ViewsIcon from '../../../3.0 - Assets/Icons/views.svg';
import LikesIcon from '../../../3.0 - Assets/Icons/likes.svg';
import VideoDetails from '../../../Data/video-details.json';
import React, { useState, useEffect, Component } from 'react';
import UserIcon1 from '../../../assets/Images/Mohan-muruge.jpg'
import SideVideoList from './SideVideoList';
import SideVideoItem from './SideVideoItem';
import videoData from '../data/mainVideosData.json';





const MainVideo = () => {
  const [mainVideo, setMainVideo] = useState(videoData[0]);
  const [sideVideos, setSideVideos] = useState(videoData.slice(1));

  const handleSideVideoClick = (clickedVideo) => {
    // Store the current main video in the side videos list
    setSideVideos((prevSideVideos) => [...prevSideVideos, mainVideo]);
    // Set the clicked video as the new main video
    setMainVideo(clickedVideo);
  };




  return (
    <div className="main__video">
      <div className="video__container">
        <video controls poster={mainVideo.image} className='video__poster'>
          <source src={mainVideo.video} type="video/mp4" className='main__video' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='video__content--container'>
      <div className="video__details">
        <h1>{mainVideo.title}</h1>
      <div className='video__info'>
        <div className="video__stats">
          <div className='video__stat--container'><img src= {ViewsIcon} className='views__icon' /><p>{mainVideo.views} </p></div>
          {/* <span>&bull;</span> */}
          <div className='video__stat--container'><img src= {LikesIcon} className='likes__icon' /><p>{mainVideo.likes} </p></div>
        </div>
        <div className="channel__details">
          {/* <div className="channel__avatar">
            <img src="/assets/images/avatar.jpg" alt="Channel Avatar" />
          </div> */}
          <div className="channel__info">
            <h4>By {mainVideo.channel}</h4>
            <p>{mainVideo.timestamp}</p>
          </div>
        </div>
        </  div>
        <p>{mainVideo.description}</p>
      </div>
      {/* Render comments */}
      <div className="comments__section">
        <h3>{comments.length} Comments</h3>
        <div class="add__comment">
          <div className="comment__avatar--container">
            <img src= {UserIcon1} className='comment__avatar'></img>
          </div>
          <div class="form__container">
            <form>
              <h3>JOIN THE CONVERSATION</h3>
              <textarea id="commentBox" class="comment__textbox" rows="10" placeholder="Add a new comment" required></textarea>
                <input id="submit__button" type="submit" value="COMMENT" class="comment__button"></input>
            </form>
          </div>
        </div>
        {/* Loop through comments */}
        {comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div className="comment__avatar--blank">
            </div>
            {/* <div className="comment__details"> */}
              <h4 className='user__name'>{comment.name}</h4>
              <p className='time__stamp'>{comment.timestamp}</p>
              <p className='comment__text'>{comment.comment}</p>
            {/* </div> */}
          </div>
          
        ))}
      </div>
      </div>
    </div>
  );
};

export default MainVideo;
