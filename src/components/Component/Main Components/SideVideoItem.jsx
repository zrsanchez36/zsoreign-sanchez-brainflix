import React from 'react';

const SideVideoItem = ({ sideVideo, onSideVideoClick }) => {
  return (
    <div className="side-video-item" onClick={() => onSideVideoClick(sideVideo)}>
      <img src={sideVideo.image} alt={sideVideo.title} />
      <div className="side-video-info">
        <h5>{sideVideo.title}</h5>
        <p>{sideVideo.channel}</p>
      </div>
    </div>
  );
};

export default SideVideoItem;
