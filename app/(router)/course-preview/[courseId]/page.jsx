"use client";
import React, { use, useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";
import { useUser } from "@clerk/nextjs";

const CoursePreview = ({ params }) => {
  const [courseInfo, setCourseInfo] = useState();

  const { user } = useUser();

  const [isUserEnrolled, setIsUserEnrolled] = useState();

  useEffect(() => {
    params && getCourseInfoById(params);
  }, [params]);

  useEffect(() => {
    courseInfo&&user&&checkUserEnrolledToCourse();
    console.log(isUserEnrolled)
  }, [courseInfo,user]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((resp) => {
      setCourseInfo(resp?.courseList);
      checkUserEnrolledToCourse();
    });
  };

  const checkUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolledToCourse(
      courseInfo.id,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log(resp)
      if (resp?.userEnrollCourses) {
        setIsUserEnrolled(resp?.userEnrollCourses[0]?.id);
      }
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>

        <div>
          <CourseEnrollSection
            courseInfo={courseInfo}
            isUserEnrolled={isUserEnrolled}
          />
          <CourseContentSection isUserEnrolled={isUserEnrolled} courseInfo={courseInfo} />
        </div>
      </div>
    )
  );
};

export default CoursePreview;
