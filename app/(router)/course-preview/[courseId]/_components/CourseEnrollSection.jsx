import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const CourseEnrollSection = ({ courseInfo, isUserEnrolled }) => {
  const membership = false;
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    console.log(isUserEnrolled);
  }, [isUserEnrolled]);

  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.id,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);

      if (resp) {

        toast("User Enrolled Successfull", {
          description: "User Enrolled to this Course",

        });

        router.push("/watch-course/"+resp.createUserEnrollCourse.id);
      }
    });
  };

  return (
    <div className="p-3 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-white">Enroll to the Course</h2>
      {user && (membership || courseInfo.free) && !isUserEnrolled ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white text-md font-light">
            Enroll Now to Start Learning and Building the Project
          </h2>
          <Button
            onClick={() => onEnrollCourse()}
            className="bg-white mt-3 w-full text-primary hover:bg-white hover:text-primary cursor-pointer"
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white text-md font-light">
            Enroll Now to Start Learning and Building the Project
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-white mt-3 w-full text-primary hover:bg-white hover:text-primary cursor-pointer">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        !isUserEnrolled && (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white text-md font-light">
              Buy Monthly Membership and Get Access to All Courses
            </h2>
            <Button className="bg-white mt-3 w-full text-primary hover:bg-white hover:text-primary cursor-pointer">
              Buy Membership Just $2.99
            </Button>
          </div>
        )
      )}
      {isUserEnrolled && (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white text-md font-light">
            Continue to Learn Your Project
          </h2>
          <Link href={"/watch-course/"+isUserEnrolled}>
            <Button className="bg-white mt-3 w-full text-primary hover:bg-white hover:text-primary cursor-pointer">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;
