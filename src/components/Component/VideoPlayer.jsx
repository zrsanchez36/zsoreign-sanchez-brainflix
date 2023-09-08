import React from 'react';
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';
import UserIcon1 from '../../assets/Images/Mohan-muruge.jpg';

function VideoPlayer({ video }) {
  if (!video) {
    return <div className="video__player--container">Loading...</div>;
  }

  return (
    <div className="video-player">
      <video controls>
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='video__details'>
        <h1 className="video-player__title">{video.title}</h1>
      <div className='video__info'>
        <div className='video__stats'>
          <div className='video__stat--container'><img src= {ViewsIcon} className='views__icon' /><p>{video.views} </p></div>
          {/* <span>&bull;</span> */}
          <div className='video__stat--container'><img src= {LikesIcon} className='likes__icon' /><p>{video.likes} </p></div>
        </div>
        
        <div className="channel__details">
          <div className="channel__info">
            <h4>By {video.channel}</h4>
            <p>{video.timestamp}</p>
          </div>
        </div>


        </div>
      </div>
      
    </div>
  );
}

export default VideoPlayer;
