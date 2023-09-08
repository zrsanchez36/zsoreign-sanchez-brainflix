import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';

import VideoList from '../../components/Component/Main Components/SideVideoList';// Create a separate VideoList component to render side-videos
import MainVideo from '../../components/Component/Main Components/MainVideo'; // Create a separate MainVideo component to render the main video
import VideoDetails from '../../components/Component/VideoDetails';


function HomePage() {
  const [videos, setVideos] = useState([]); // State for side-videos
  const [mainVideo, setMainVideo] = useState(null); // State for the main video
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Fetch video data from the API and update state
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f')
      .then((response) => {
        const videoData = response.data;
        console.log(videoData)
        // Check if videoData is defined and not empty before setting the selected video
        if (Array.isArray(videoData) && videoData.length > 0) {
          // Set the selected video as the first video
          setMainVideo(videoData[0]);

          // Set the rest of the videos as side videos
          const sideVideos = videoData.slice(1);
          setVideos(sideVideos);
        } else {
          console.error('No valid videos found in the API response.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);


  // Function to handle side video click
  const handleSideVideoClick = (clickedVideo) => {
    // Move the current main video to the side video list
    if (mainVideo) {
      setVideos((prevVideos) => [mainVideo, ...prevVideos]);
    }

    // // Set the previous main video as the current main video
    // setPreviousMainVideo(selectedVideo);

    // Set the selected video as the new main video
    setMainVideo(clickedVideo);

    // Filter out the selected video from the side videos
    // const updatedSideVideos = videos.filter((video) => video.id !== clickedVideo.id);
    // setVideos(updatedSideVideos);
  };

   // Function to handle main video end
   const handleMainVideoEnd = () => {
    // Put the selected video (if any) back into the side video list
    if (selectedVideo) {
      setVideos((prevVideos) => [selectedVideo, ...prevVideos]);
    }
    // Clear the selected video
    setSelectedVideo(null);
  };


  return (
    <div className="home__page">
      {/* Render the main video */}
      {mainVideo && <MainVideo video={mainVideo} views= {mainVideo.views} likes= {mainVideo.likes} comments={mainVideo.comments} onEnded={handleMainVideoEnd} key={mainVideo.id}/>}

      {/* Render the list of videos */}
      <VideoList videos={videos} onSideVideoClick={handleSideVideoClick} />

       {/* Define a Route for VideoDetails */}
       <Routes>
        <Route path="/videos/:videoId" element={<VideoDetails />} />
       </Routes>
    </div>
  );
}

export default HomePage;