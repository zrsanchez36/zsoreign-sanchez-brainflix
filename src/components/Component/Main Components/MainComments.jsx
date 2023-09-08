import React from 'react';

import UserIcon1 from '../../../assets/Images/Mohan-muruge.jpg'

import axios from 'axios';

function MainComments ({ comments }){
    const fetchVideoData = async () => {
        try {
          const response = await axios.get('https://project-2-api.herokuapp.com/videos?api_key=ddb4cfdc-7137-4dbb-8b90-f00aea8d2d3f/videos/:id'); // Replace with your API URL
          const videoData = response.data; // The response data contains video details and comments
          return videoData;
        } catch (error) {
          console.error('Error fetching video data:', error);
        }
      };
    return (
        <div className="comments__section">
        <h3>{comments.length} Comments</h3>
        <div className="add__comment">
          <div className="comment__avatar--container">
            <img src= {UserIcon1} className='comment__avatar'></img>
          </div>
          <div className="form__container">
            <form>
              <h3>JOIN THE CONVERSATION</h3>
              <textarea id="commentBox" className="comment__textbox" rows="10" placeholder="Add a new comment" required></textarea>
                <input id="submit__button" type="submit" value="COMMENT" className="comment__button"></input>
            </form>
          </div>
        </div>
        {/* Loop through comments */}
        {comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div className="comment__avatar--blank">
            </div>
            {/* <div className="comment__details"> */}
              <h4 className='user__name'>{comment.name}</h4>
              <p className='time__stamp'>{comment.timestamp}</p>
              <p className='comment__text'>{comment.comment}</p>
            {/* </div> */}
          </div>
        ))}
      </div>
    )
}

export default MainComments;