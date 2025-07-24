import React from 'react'
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';

const CourseVideoDescription = ({ courseInfo, activeChapterIndex, watchMode=false, setChapterCompleted }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{courseInfo?.name}</h2>
      <h2 className="text-gray-400 text-md mt-2">{courseInfo?.author}</h2>
      <VideoPlayer
        poster={courseInfo?.banner?.url}
        videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
      />
      <h2 className="mt-5 text-xl font-bold">
        {watchMode ? (
          <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name} 
          <Button onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)} >
            Mark Completed
          </Button>
          </span>
        ) : (
          <span>About this Course</span>
        )}
      </h2>
      <div>
        {watchMode ? (
          <Markdown>{courseInfo?.chapter[activeChapterIndex]?.shortDesc}</Markdown>
        ) : (
          <Markdown>{courseInfo?.description}</Markdown>
        )}
      </div>
    </div>
  );
};

export default CourseVideoDescription
