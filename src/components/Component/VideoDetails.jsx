

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VideoDetails() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Fetch video data for the selected videoId from the API and update state
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f/videos/:id').then((response) => {
      setVideo(response.data);
    })
    .catch((error) => {
      console.error('Error fetching video details:', error);
    });
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-details">
      {/* Render video details, comments, etc. for the selected video */}
      <h1> IT WORKED</h1>
    </div>
  );
}

export default VideoDetails;
