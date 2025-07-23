import React from 'react'

const VideoPlayer = ({ videoUrl }) => {
  return <video width={1000} height={250} controls className='rounded-sm mt-5'>
    <source src={videoUrl} />
    

  </video>;
};

export default VideoPlayer
