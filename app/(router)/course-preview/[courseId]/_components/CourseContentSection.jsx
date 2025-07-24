import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

const CourseContentSection = ({
  courseInfo,
  isUserEnrolled,
  watchMode = false,
  setActiveChapterIndex,
  completedChapter,
}) => {

  const checkIsChapterCompleted = (chapterId) => {
    return completedChapter.find(item => item.chapterId == chapterId)

  }
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-3 bg-white rounded-sm">
      <h2 className="text-xl font-bold mb-3">Content</h2>
      {courseInfo.chapter.map((item, index) => (
        <div>
          <h2
            className={`p-2 text-md flex justify-between items-center border rounded-sm px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-500 ${
              activeIndex === index && "bg-primary text-white"
            } ${isUserEnrolled && "hover:bg-primary hover:text-white"} ${
              watchMode && checkIsChapterCompleted(item.id)&& "border-green-800 bg-green-400"
            }`}
            onClick={() => {
              watchMode && setActiveChapterIndex(index);
              watchMode && setActiveIndex(index);
            }}
          >
            {index + 1}. {item.name}
            {activeIndex === index || isUserEnrolled ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CourseContentSection;
