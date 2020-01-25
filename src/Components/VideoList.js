import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
  const renderList = videos.map((video, index) => {
    return(
      <VideoItem
        video={video}
        key={index}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return(
   <div className={'ui list'}>
     {renderList}
   </div>
  )
};

export default VideoList;