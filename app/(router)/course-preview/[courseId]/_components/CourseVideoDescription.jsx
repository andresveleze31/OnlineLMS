import React from 'react'
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';

const CourseVideoDescription = ({ courseInfo }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{courseInfo?.name}</h2>
      <h2 className="text-gray-400 text-md mt-2">{courseInfo?.author}</h2>
      <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url} />
      <h2 className="mt-5 text-xl font-bold">About this Course</h2>
      <div>
        <Markdown>
          {courseInfo?.description}
        </Markdown>
      </div>
    </div>
  );
};

export default CourseVideoDescription
