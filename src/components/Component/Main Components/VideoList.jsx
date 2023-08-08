import React, { useState, useEffect } from 'react';
import VideoDetails from '../../../Data/video-details.json';
import VideoListData from '../../../Data/videos.json';


const SideVideo = ({ video, onClick }) => {
  return (
    <div className="side-video" onClick={onClick}>
      <img src={video.image} alt={video.title} />
      <div className="side-video-info">
        <h4>{video.title}</h4>
        <p>{video.channel}</p>
      </div>
    </div>
  );
};

export default SideVideo;
