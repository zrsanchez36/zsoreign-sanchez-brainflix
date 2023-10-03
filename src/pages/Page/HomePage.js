

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import UserIcon1 from '../../assets/Images/Mohan-muruge.jpg';
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';
//import './homePage.css';

function HomePage() {
    const { videoId } = useParams();
    const [mainVideo, setMainVideo] = useState(null);
    const [sideVideos, setSideVideos] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            try {
                // Fetch all videos
                const allVideos = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f`);
                
                // Determine which video to use as main video: videoId from URL or first video from the list
                const currentVideoId = videoId || allVideos.data[0].id;

                // Fetch details of the main video
                const mainVideoResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f`);
                setMainVideo(mainVideoResponse.data);

                // Filter out the main video from the side videos list
                const filteredSideVideos = allVideos.data.filter(video => video.id !== currentVideoId);
                setSideVideos(filteredSideVideos);
                setComments(mainVideoResponse.data.comments);
            } catch (error) {
                console.error("Error fetching videos:", error.response?.data || error.message);
            }
        }

        fetchVideos();
    }, [videoId]);


    return (
      <div className='homepage'>
          {/* <header>
              <Link to="/">
                  <img src="path-to-brainflix-logo.png" alt="BrainFlix Logo" />
              </Link>
          </header> */}

          {/* Main Video */}
          {mainVideo && (
              <section className='main__video'>
                <div className='video__container'>
                  <video poster={mainVideo.image} className='video__poster' controls src={mainVideo.video + "?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f" }></video>
                </div>
                <div className='video__content--container'> 
                  <div className='video__details'>
                    <div className='main__video--title'>
                      <h1>{mainVideo.title}</h1>
                    </div>
                    <div className='video__info'>
                      <div className='video__stats'>
                        <div className='video__stat--container'><img src= {ViewsIcon} className='views__icon' alt='views'/><p>{mainVideo.views}</p></div>
                        <div className='video__stat--container'><img src= {LikesIcon} className='likes__icon' alt='likes'/><p>{mainVideo.likes} </p></div>
                      </div>
                      <div className="channel__info">
                        <h4>By {mainVideo.channel}</h4>
                        <p>{mainVideo.timestamp}</p>
                      </div>
                    </div>
                  
                  <div className='main__video--description'>
                  <p>{mainVideo.description}</p>
                  </div>
                </div>
                </div>
            {/*comment section  */}   
                  
                  <div className="comments__section">
                    <h3 className='comment__amount'>{mainVideo.comments.length} Comments</h3>
                    <div className="add__comment">
                       <div className="comment__avatar--container">
                          <img src= {UserIcon1} className='comment__avatar' alt='user'></img>
                        </div>
                    <div className="form__container">
                      <form className='comment__form' id='commentForm'>
                      <h3>JOIN THE CONVERSATION</h3>
                        <div className='inner__form--content'>
                          <textarea id="commentBox" className="comment__textbox" rows="10" placeholder="Add a new comment" required></textarea>
                          <div className='submit__button--container'>
                            <input id="submit__button" type="submit" value="COMMENT" className="comment__button"></input>
                          </div>
                        </div>
                     </form>
                    </div>
                    </div>
                    <div className='comment__area'>
            {comments.map(comment => (
                <div key={comment.id} className='comment'>
                  
                    <div className="comment__avatar--blank"> </div>
                      <h4 className='user__name'>{comment.name}</h4>
                      <p className='time__stamp'>{comment.timestamp}</p>
                      <p className='comment__text'>{comment.comment}</p>
                  </div>
                
            ))}
                  </div>
                  </div>




              </section>
          )}

          {/* Side (Next) Videos */}

          <section className='side__video--section'>
            <div className='side__video--list'>
            <h4 className='next__video'>Next Videos</h4>
              {sideVideos.map(video => (
                <div className='side__video'>
                  <Link key={video.id} to={`/video-details/${video.id}` } className='side__videolink--container'>
                    <div className='side__video--container'>
                          <img src={video.image} alt={video.title} className='side__video--img' />
                    </div>
                          <div className="side__video--info">
                            <h3>{video.title}</h3>
                            <p>{video.channel}</p>
                          </div>
                  </Link>
                </div>
              ))}
              </div>
          </section>
      </div>
  );
}

export default HomePage;
