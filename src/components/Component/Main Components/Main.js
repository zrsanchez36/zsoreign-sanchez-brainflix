import React, { useState, useEffect } from 'react';
//import sideVideoData from '../../../data/videos.json';
import mainVideoData from '../../../Data/video-details.json';
import MainVideo from './MainVideo';
import CommentsSection from './CommentsSection';
import SideVideoList from './SideVideoList';



// import React, { useState } from 'react';
// import './App.css';
// import data from './data'; // Import the provided data
// import Header from './components/Header';
// import MainVideo from './components/MainVideo';
// import SideVideoList from './components/SideVideoList';

function Main() {
  const [mainVideo, setMainVideo] = useState(mainVideoData[0]); // Initialize mainVideo with the first video
  const [sideVideos, setSideVideos] = useState(mainVideoData.slice(1)); // Initialize sideVideos with all videos except the first

  const handleSideVideoClick = (videoId) => {
    // Find the selected video from sideVideos array
    const selectedVideo = sideVideos.find(video => video.id === videoId);

    // Remove the current mainVideo from sideVideos and add it back
    setSideVideos(prevSideVideos => [mainVideo, ...prevSideVideos.filter(video => video.id !== videoId)]);

    // Update the mainVideo state with the selected video
    setMainVideo(selectedVideo);
  };

  return (
    <div className="Main">
      <MainVideo mainVideo={mainVideo} comments={mainVideo.comments} />
      <SideVideoList sideVideos={sideVideos} onSideVideoClick={handleSideVideoClick} />
    </div>
  );
}

export default Main;











