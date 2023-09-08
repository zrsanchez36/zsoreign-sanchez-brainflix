

import React from 'react';
import VideoListItem from '../VideoListItem';



function VideoList({ videos,  onSideVideoClick }) {
  return (
    <div className="side-videos">
      {videos.map((video) => (
        <VideoListItem key={video.id} video={video} onSideVideoClick={onSideVideoClick}/>
      ))}
    </div>
  );
}

export default VideoList;
