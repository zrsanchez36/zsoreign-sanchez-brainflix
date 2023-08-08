import React from 'react';

const SideVideo = ({ video, onClick }) => {
  return (
    <div className="side__video" onClick={onClick}>
      <img src={video.image} alt={video.title} />
      <div className="side__video--info">
        <h4>{video.title}</h4>
        <p>{video.channel}</p>
      </div>
    </div>
  );
};

export default SideVideo;
