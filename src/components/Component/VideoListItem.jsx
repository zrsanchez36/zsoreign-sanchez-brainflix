import React from 'react';
import { Link } from 'react-router-dom';

function VideoListItem({ video, onSideVideoClick  }) {

  const handleSideVideoClick = () => {
    // Call the click handler and pass the clicked video
    onSideVideoClick(video);
  };
  return (
    <Link to={`/videos/${video.id}`} className="video-item-link">
      <div className="video-item" onClick={handleSideVideoClick}>
        <video controls poster={video.image} height="auto">
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3>{video.title}</h3>
        {/* Render other video details like author, etc. */}
      </div>
    </Link>
  );
}

export default VideoListItem;
