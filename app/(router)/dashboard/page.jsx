"use client"
import { useUser } from '@clerk/nextjs'
import React, { use, useEffect, useState } from 'react'
import WelcomeBanner from './_components/WelcomeBanner';
import SideBanners from '../courses/_components/SideBanners';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '@/app/_utils/GlobalApi';

const DashboardPage = () => {

  const {user} = useUser();

  const [userEnrolledCourses, setUserEnrolledCourses] = useState();


  useEffect(() => {
    user&&getAllUserEnrolledCourses();
  },[user])

  const getAllUserEnrolledCourses = () => {
    GlobalApi.getUserAllEnrolledCourse(user.primaryEmailAddress.emailAddress).then(resp => {
        setUserEnrolledCourses(resp.userEnrollCourses)
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        <WelcomeBanner user={user} />

        <InProgressCourseList userEnrollCourses={userEnrolledCourses} />
      </div>
      <div className="p-5 bg-white rounded-xl">
        <SideBanners />
      </div>
    </div>
  );
}

export default DashboardPage
