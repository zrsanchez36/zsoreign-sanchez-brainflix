import React from 'react';
import SideVideo from './SideVideo';

const SideVideoList = ({ sideVideos, onSideVideoClick }) => {
  return (
    <div className="side-video-list">
      <h4>Next Videos</h4>
      {sideVideos.map(video => (
        <SideVideo key={video.id} video={video} onClick={() => onSideVideoClick(video.id)} />
      ))}
    </div>
  );
};

export default SideVideoList;
