"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { Apple, Book, Clock, Play, Star, User, Users, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursesHome = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalApi.getCourseList().then((resp) => {
      console.log(resp);
      setCourseList(resp?.courseLists);
    });
  };

  return (
    <div className="bg-white py-20">
      <div className="flex flex-col gap-4 justify-center  items-center">
        <p className="uppercase text-primary text-center">
          Go at your own pace
        </p>
        <h3 className="text-4xl text-center font-bold md:w-1/3">
          The World’s Top Courses
        </h3>
        <p className="text-gray-500 text-sm mb-5 text-center md:w-1/3">
          Online video courses with new additions published every month.
        </p>
      </div>
      <div className="contenedor w-full  grid md:grid-cols-4 gap-4">
        <div className="border bg-white rounded-lg">
          <Image
            src={"/c1.jpg"}
            width={300}
            height={300}
            className="w-full rounded-t-lg"
            alt="Image"
          />
          <div className="p-4">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <Book className="text-gray-500 size-4" />
                <p className="text-gray-500">2</p>
              </div>
              <div className="flex gap-2 items-center">
                <Users className="text-gray-500 size-4" />
                <p className="text-gray-500">3</p>
              </div>

              <div className="flex gap-2 items-center">
                <Clock className="text-gray-500 size-4" />
                <p className="text-gray-500">30 hours</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2 hover:underline">
              Learn Full Stack Development, HTML, CSS & Javascript
            </h3>
            <div className="flex gap-2 items-center mt-3">
              <p>4.5</p>
              <div className="flex items-center gap-2 ">
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">By: Robert Fox</p>
            <Button className={"w-full mt-3"}>
              <Watch />
              View Full Course
            </Button>
          </div>
        </div>

        <div className="border bg-white rounded-lg">
          <Image
            src={"/c2.jpg"}
            width={300}
            height={300}
            className="w-full rounded-t-lg"
            alt="Image"
          />
          <div className="p-4">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <Book className="text-gray-500 size-4" />
                <p className="text-gray-500">2</p>
              </div>
              <div className="flex gap-2 items-center">
                <Users className="text-gray-500 size-4" />
                <p className="text-gray-500">3</p>
              </div>

              <div className="flex gap-2 items-center">
                <Clock className="text-gray-500 size-4" />
                <p className="text-gray-500">30 hours</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2 hover:underline">
              Microservices and cloud deployment: From noob to advanced
            </h3>
            <div className="flex gap-2 items-center mt-3">
              <p>4.5</p>
              <div className="flex items-center gap-2 ">
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">By: Robert Fox</p>
            <Button className={"w-full mt-3"}>
              <Watch />
              View Full Course
            </Button>
          </div>
        </div>

        <div className="border bg-white rounded-lg">
          <Image
            src={"/c3.jpg"}
            width={300}
            height={300}
            className="w-full rounded-t-lg"
            alt="Image"
          />
          <div className="p-4">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <Book className="text-gray-500 size-4" />
                <p className="text-gray-500">2</p>
              </div>
              <div className="flex gap-2 items-center">
                <Users className="text-gray-500 size-4" />
                <p className="text-gray-500">3</p>
              </div>

              <div className="flex gap-2 items-center">
                <Clock className="text-gray-500 size-4" />
                <p className="text-gray-500">30 hours</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2 hover:underline">
              Soft skills, learn how to interact - be the best at your job
            </h3>
            <div className="flex gap-2 items-center mt-3">
              <p>4.5</p>
              <div className="flex items-center gap-2 ">
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">By: Robert Fox</p>
            <Button className={"w-full mt-3"}>
              <Watch />
              View Full Course
            </Button>
          </div>
        </div>

        <div className="border bg-white rounded-lg">
          <Image
            src={"/c4.jpg"}
            width={300}
            height={300}
            className="w-full rounded-t-lg"
            alt="Image"
          />
          <div className="p-4">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <Book className="text-gray-500 size-4" />
                <p className="text-gray-500">2</p>
              </div>
              <div className="flex gap-2 items-center">
                <Users className="text-gray-500 size-4" />
                <p className="text-gray-500">3</p>
              </div>

              <div className="flex gap-2 items-center">
                <Clock className="text-gray-500 size-4" />
                <p className="text-gray-500">30 hours</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2 hover:underline">
              Learn CI/CD: Amazon Web Services, build and deploy application
            </h3>
            <div className="flex gap-2 items-center mt-3">
              <p>4.5</p>
              <div className="flex items-center gap-2 ">
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
                <Star className="size-4 text-yellow-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">By: Robert Fox</p>
            <Button className={"w-full mt-3"}>
              <Watch />
              View Full Course
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="contenedor bg-primary/10 rounded-xl p-10 ">
          <div className="grid md:grid-cols-2 place-items-center gap-5">
            <div className="w-5/6">
              <h1 className="text-5xl font-bold">
                The best place to learn? Wherever you are.
              </h1>
              <p className="text-sm mt-5">
                With the UpSkill App, you can learn no matter where you are.
                Download now to learn anything, anytime for free.
              </p>

              <div className="flex gap-3 mt-8">
                <div className="bg-black p-3 flex gap-2 items-center rounded-lg">
                  <Apple className="text-white" />
                  <p className="text-white">Download in the Appstore</p>
                </div>
                <div className="bg-black p-3 flex gap-2 items-center rounded-lg">
                  <Play className="text-white" />
                  <p className="text-white ">Download in the Appstore</p>
                </div>
              </div>
            </div>
            <Image src={"/4.png"} width={2000} height={2000} alt="Phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHome;
