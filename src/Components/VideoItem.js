import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
      <div className={'item'}
           style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
           onClick={() => onVideoSelect(video)}
        <img className={'ui image'}
             style={{maxWidth: '150px'}}
             src={video.snippet.thumbnails.medium.url}
             alt="thumbnail" />
        <div className={'content'}>
          <div className={'header'}>
            {video.snippet.title}
          </div>
        </div>
      </div>
    )
};

export default VideoItem;