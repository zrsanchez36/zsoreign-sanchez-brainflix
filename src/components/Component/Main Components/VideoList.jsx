import React, { useState, useEffect } from 'react';
import VideoDetails from '../../../Data/video-details.json';
import VideoListData from '../../../Data/videos.json';

const VideoList = ({ videos, onSelect }) => {
  return (
    <div className="video-list">
      {VideoListData.map(video => (
        <div key={VideoListData.id} className="video-item" onClick={() => onSelect(video)}>
          <img src={VideoListData.image} alt={VideoListData.title} />
          <h3>{VideoListData.title}</h3>
          <p>{VideoListData.channel}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;