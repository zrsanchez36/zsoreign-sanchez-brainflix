import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserIcon1 from '../../assets/Images/Mohan-muruge.jpg';
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';





function VideoDetailsPage() {
    const { videoId } = useParams();
    const [videoDetails, setVideoDetails] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchVideoDetails() {
            try {
                const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f`);
                console.log("Data from API:", response.data);
                setVideoDetails(response.data);
                setComments(response.data.comments);
            } catch (error) {
                console.error("Error fetching video details:", error.response?.data || error.message);
            }
        }

        fetchVideoDetails();
    }, [videoId]);
    
    if (!videoDetails) return <div>Loading...</div>;
    
    return (
        <div>
            <section className='main__Video'>
            <div className='video__container'>
                <video poster={videoDetails.image} className='video__poster' controls src={videoDetails.video + "?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f"}></video>
            </div>
            <div className='video__details'>
                <div className='main__video--title'>
                <h1>{videoDetails.title}</h1>
                </div>

                <div className='video__info'>
                    <div className="channel__info">
                        <p>By {videoDetails.channel}</p>
                        <p> {videoDetails.timestamp}</p>
                    </div>
                    <div className='video__stats'>
                        <div className='video__stat--container'><img src= {ViewsIcon} className='views__icon' alt='views'/><p> {videoDetails.views}</p></div>
                        <div className='video__stat--container'><img src= {LikesIcon} className='likes__icon' alt='likes'/><p>{videoDetails.likes}</p></div>
                    </div>
                </div>
            </div>
           
           
           
            {/*comment section  */}   
                  
            <div className="comments__section">
                    <h3>{videoDetails.comments.length} Comments</h3>
                    <div className="add__comment">
                       <div className="comment__avatar--container">
                          <img src= {UserIcon1} className='comment__avatar' alt='user'></img>
                        </div>
                    <div className="form__container">
                      <form>
                      <h3>JOIN THE CONVERSATION</h3>
                        <textarea id="commentBox" className="comment__textbox" rows="10" placeholder="Add a new comment" required></textarea>
                          <input id="submit__button" type="submit" value="COMMENT" className="comment__button"></input>
                     </form>
                    </div>
                    </div>
                  </div>



            
            {comments.map(comment => (
                <div key={comment.id} className='comment'>
                     <div className="comment__avatar--blank"> </div>
                    <h4 className='user__name'>{comment.name}</h4>
                    <p className='time__stamp'>{comment.timestamp}</p>
                    <p className='comment__text'>{comment.comment}</p>
                </div>
            ))}
            </section>
        </div>
    );
}

export default VideoDetailsPage;
