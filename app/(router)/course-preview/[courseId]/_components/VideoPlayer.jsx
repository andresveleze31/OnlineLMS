import React from 'react'

const VideoPlayer = ({ videoUrl, poster }) => {
  return (
    <video
      poster={poster}
      width={1000}
      key={videoUrl}
      height={250}
      controls
      className="rounded-sm mt-5"
    >
      <source src={videoUrl} />
    </video>
  );
};

export default VideoPlayer
