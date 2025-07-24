import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProgressCourseItem = ({ course }) => {
  const getTotalCompletedChapterPerc = (item) => {
    const perc =
      item.completedChapter?.length / item?.courseList?.chapter?.length;
    return perc;
  };

  return (
    <Link href={"/course-preview/"+course?.courseList?.id}>
      <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-rose-300">
        <Image
          className="rounded-t-xl"
          src={course.courseList?.banner?.url}
          width={500}
          height={150}
        />
        <div className="flex flex-col gap-1 p-3">
          <h2 className="font-bold">{course.courseList.name} </h2>
          <h2 className="text-md text-gray-400">{course.courseList.author}</h2>
          <h2 className="text-md text-gray-400 mt-3">
            {getTotalCompletedChapterPerc(course)}%
            <span className="float-right">
              {course.completedChapter?.length}/
              {course?.courseList?.chapter?.length} Chapters
            </span>
          </h2>
          <Progress value={getTotalCompletedChapterPerc(course) * 100} />
        </div>
      </div>
    </Link>
  );
};

export default ProgressCourseItem;
