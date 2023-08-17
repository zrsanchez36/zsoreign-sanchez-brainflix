import React from 'react';
import SideVideo from './SideVideo';

const SideVideoList = ({ sideVideos, onSideVideoClick }) => {
  return (
    <section className='side__video--section'>
    <div className="side__video--list">
      <h4 className='next__video'>Next Videos</h4>
      {sideVideos.map(video => (
        <SideVideo key={video.id} video={video} onClick={() => onSideVideoClick(video.id)} className='side__video--img' />
      ))}
    </div>
    </section>
  );
};

export default SideVideoList;
