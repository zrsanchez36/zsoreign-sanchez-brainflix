import ViewsIcon from '../../../3.0 - Assets/Icons/views.svg';
import LikesIcon from '../../../3.0 - Assets/Icons/likes.svg';
import VideoDetails from '../../../Data/video-details.json';
import React, { useState, useEffect, Component } from 'react';

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





const mainVideoDetails = [];

const MainVideo = ({ mainVideo, comments, props }) => {
    const [videoData, setVideoData] = useState(mainVideo);
    
        return (

            <section className='main__video'>
                {
                    VideoDetails && VideoDetails.map( details => {
                        const image = details.image;
                        const video = details.video;
                        const id = details.id;
                        const title = details.title;
                        const description = details.description;
                        const channel = details.channel;
                        const views = details.views;
                        const likes = details.likes;
                        

                        return(
                            
                            <div className='main__video--container' key={ id }>
                               <div className="main__video">
                                <video controls poster={image}>
                                <source src={video}></source>
                                </video>

                                    <h1>{title}</h1>
                                    <p>07/11/2021</p>
                                    <img src={ViewsIcon}></img><p>{views} views</p>
                                    <img src={LikesIcon}></img><p>{likes}</p>
      {/* Render other details like description, likes, duration, etc. */}
                                </div>     
                            </div>
                        )
                    })
                }
            </section> 
    );
  };
  
  export default MainVideo;

