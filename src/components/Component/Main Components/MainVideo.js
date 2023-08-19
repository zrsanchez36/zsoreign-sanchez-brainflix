import ViewsIcon from '../../../3.0 - Assets/Icons/views.svg';
import LikesIcon from '../../../3.0 - Assets/Icons/likes.svg';
import VideoDetails from '../../../Data/video-details.json';
import React, { useState, useEffect, Component } from 'react';
import UserIcon1 from '../../../assets/Images/Mohan-muruge.jpg'
import SideVideoList from './SideVideoList';



// function MainVideo(props) {
//     const attribute = props.attribute;
//     const className = props.className;
//     const image = props.image;
//     const video = props.video;
//     const id = props.id;
//     const title = props.title;
//     const description = props.description;
//     const channel = props.channel;
    

//         return (
//             <section className='main__video'>
//                 <video controls poster={image}>
//                     <source src={vidData}>{video}</source>
//                 </video>
//                 <h2 className='video__title'>{title}</h2>
//                 <div className='video__metrics'>
//                     <h4 className='video__channel'>{channel}</h4>
//                     <p className='video__date'></p>
//                     <img src={ViewsIcon} className='views__icon'></img>
//                     <p className='video__views'></p>
//                     <img src={LikesIcon} className='likes__icon'></img>
//                     <p classname='video__likes'></p>
//                     <p className='video__description'></p>
//                 </div>
//             </section>
//         )
// }

// export default MainVideo;





// const mainVideoDetails = [];
// mainVideoDetails.push(VideoDetails);
// console.log(mainVideoDetails);


// const MainVideo = ({ mainVideo, comments, props, n }) => {
//     // const [primaryVideo, setVideo, idleVideo] = useState(mainVideoDetails[0]);
//         return (

//             <section className='main__video'>
//                 {
//                     VideoDetails && VideoDetails.map( details => {
//                         const image = details.image;
//                         const video = details.video;
//                         const id = details.id;
//                         const title = details.title;
//                         const description = details.description;
//                         const channel = details.channel;
//                         const views = details.views;
//                         const likes = details.likes;
                        

//                         return(
                            
//                             <div className='main__video--container' key={ id }>
//                                <div className="main__video">
//                                 <video controls poster={image}>
//                                 <source src={video}></source>
//                                 </video>

//                                     <h1>{title}</h1>
//                                     <p>07/11/2021</p>
//                                     <img src={ViewsIcon}></img><p>{views} views</p>
//                                     <img src={LikesIcon}></img><p>{likes}</p>
//       {/* Render other details like description, likes, duration, etc. */}
//                                 </div>     
//                             </div>
//                         )
//                     })
//                 }
//             </section> 
//     );
//   };
  
//   export default MainVideo;


const MainVideo = ({ mainVideo, comments }) => {
  return (
    <div className="main__video">
      <div className="video__container">
        <video controls poster={mainVideo.image} className='video__poster'>
          <source src={mainVideo.video} type="video/mp4" className='main__video' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='video__content--container'>
      <div className="video__details">
        <h1>{mainVideo.title}</h1>
      <div className='video__info'>
        <div className="video__stats">
          <div className='video__stat--container'><img src= {ViewsIcon} className='views__icon' /><p>{mainVideo.views} </p></div>
          {/* <span>&bull;</span> */}
          <div className='video__stat--container'><img src= {LikesIcon} className='likes__icon' /><p>{mainVideo.likes} </p></div>
        </div>
        <div className="channel__details">
          {/* <div className="channel__avatar">
            <img src="/assets/images/avatar.jpg" alt="Channel Avatar" />
          </div> */}
          <div className="channel__info">
            <h4>By {mainVideo.channel}</h4>
            <p>{mainVideo.timestamp}</p>
          </div>
        </div>
        </  div>
        <p>{mainVideo.description}</p>
      </div>
      {/* Render comments */}
      <div className="comments__section">
        <h3>{comments.length} Comments</h3>
        <div class="add__comment">
          <div className="comment__avatar--container">
            <img src= {UserIcon1} className='comment__avatar'></img>
          </div>
          <div class="form__container">
            <form>
              <h3>JOIN THE CONVERSATION</h3>
              <textarea id="commentBox" class="comment__textbox" rows="10" placeholder="Add a new comment" required></textarea>
                <input id="submit__button" type="submit" value="COMMENT" class="comment__button"></input>
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
      </div>
    </div>
  );
};

export default MainVideo;
