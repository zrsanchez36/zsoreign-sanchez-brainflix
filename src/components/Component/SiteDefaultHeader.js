

import logo from '../../assets/Logo/BrainFlix-logo.svg';
import UploadButton from './Button';
import SiteLogo from './Logo';
import SearchBar from './DefaultSearchBar';
import UserImage from './UserImage';
import '../../styles/header.css';



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header({setMainVideo, setVideos}) {
  const history = useNavigate();

  // Function to reset the HomePage component state
  const resetHomePageState = () => {
    // You should replace 'API_URL_HERE' with the actual API URL used to fetch data initially
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f/videos/:id')
      .then((response) => {
        const videoData = response.data.videos;

        if (Array.isArray(videoData) && videoData.length > 0) {
          // Reset the main video and side videos to their initial state
          setMainVideo(videoData[0]);
          setVideos(videoData.slice(1));

        //   setMainVideo(initialMainVideo);
        //   setVideos(initialSideVideos);
        } else {
          console.error('No valid videos found in the API response.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };

  // Function to handle the home link click
  const handleHomeLinkClick = () => {
    // Navigate to the home route ("/") using React Router
    history.push('/');
    // Reset the HomePage component state
    resetHomePageState();
  };

  return (
    <header className="site__header">
      <nav className='site__navigation'>
        <Link to="/" className="header__logo--link" onClick={handleHomeLinkClick}>
          <SiteLogo className = 'header__logo' alt='Brainflix Logo' />
        </Link>
        <SearchBar className = 'header__search' type = 'text' placeholder = 'Search' />
        <UserImage className = 'header__userimage' alt = 'user' />
      <Link to="/upload"  className="header__nav--link">
        <UploadButton className = 'header__button' label='UPLOAD'  />
      </Link>

      </nav>
    </header>
    
  );
}

export default Header;
