import Image from "next/image";
import React from "react";

const CourseItem = ({ course }) => {
  return (
    <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-rose-300">
      <Image
        className="rounded-t-xl"
        src={course?.banner?.url}
        width={500}
        height={150}
      />
      <div className="flex flex-col gap-1 p-3">
        <h2 className="font-bold">{course.name} </h2>
        <h2 className="text-md text-gray-400">{course.author}</h2>
        {course?.chapter?.length == 0 ? (
          <div className="flex gap-2">
            <Image
              src={"/youtube.png"}
              alt="Capitulo"
              width={20}
              height={20}
            />
            <h2 className="text-sm text-gray-400">Watch on Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image src={"/capitulo.png"} alt="Youtube" width={20} height={20} />
            <h2 className="text-sm text-gray-400">Chapters</h2>
          </div>
        )}
        <h2 className="text-md font-semibold">
          {course?.free ? "Free" : "Paid"}
        </h2>
      </div>
    </div>
  );
};

export default CourseItem;
