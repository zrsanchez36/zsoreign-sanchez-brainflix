import React from 'react';
import VideoDetails from '../../../Data/video-details.json';

const VideoPlayer = () => {
  return (
    <div className="video__player">
      <video controls poster={VideoDetails.image}>
        {VideoDetails}
      </video>
    </div>
  );
};

export default VideoPlayer;
