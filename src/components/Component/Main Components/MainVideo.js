import ViewsIcon from '../../../assets/Icons/views.svg';
import LikesIcon from '../../../assets/Icons/likes.svg';
import Comments from './MainComments';

import UserIcon1 from '../../../assets/Images/Mohan-muruge.jpg'
import SideVideoList from './SideVideoList';
import axios from 'axios';



import React, {useEffect, useState} from 'react';




function MainVideo({ video }) {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Fetch video data when the component mounts
    fetchVideoData().then((data) => {
      setVideoData(data);
    });
  }, []);

  const fetchVideoData = async () => {
    try {
      const response = await axios.get('https://project-2-api.herokuapp.com/videos?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f'); // Replace with your API URL
      const videoData = response.data; // The response data contains video details
      return videoData;
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  return (
    
    <div className="main__video">
      <div className="video__container">
      <video controls poster={video.image} className='video__poster'>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className='video__content--container'>
      <div className="video__details">
        <h1>{video.title}</h1>
      <div className='video__info'>
        <div className="video__stats">
          <div className='video__stat--container'><img src= {ViewsIcon} className='views__icon' /><p>{video.views} </p></div>
          {/* <span>&bull;</span> */}
          <div className='video__stat--container'><img src= {LikesIcon} className='likes__icon' /><p>{video.likes} </p></div>
        </div>
        <div className="channel__details">
          {/* <div className="channel__avatar">
            <img src="/assets/images/avatar.jpg" alt="Channel Avatar" />
          </div> */}
          <div className="channel__info">
            <h4>By {video.channel}</h4>
            <p>{video.timestamp}</p>
            <p></p>
          </div>
        </div>
        </  div>
        <p>{video.description}</p>
      </div>
      {/* Render comments */}
      
      
      </div>
    </div>
  );
}

export default MainVideo;
