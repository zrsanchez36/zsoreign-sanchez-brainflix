import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserIcon1 from '../../assets/Images/Mohan-muruge.jpg';

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
            <video poster={videoDetails.image} controls src={videoDetails.video + "?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f"}></video>
            <div className='main__video--title'>
            <h1>{videoDetails.title}</h1>
            </div>
            <p>Likes: {videoDetails.channel}</p>
            <p>Views: {videoDetails.timestamp}</p>
            <p>Author: {videoDetails.views}</p>
            <p>{videoDetails.likes}</p>

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



            <h2>Comments</h2>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </div>
    );
}

export default VideoDetailsPage;
