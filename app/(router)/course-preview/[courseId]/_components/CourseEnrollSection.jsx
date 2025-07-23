import { Button } from "@/components/ui/button";
import React from "react";

const CourseEnrollSection = () => {
  const membership = false;

  return (
    <div className="p-3 text-center rounded-sm bg-primary flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-white">Enroll to the Course</h2>
      {membership ? (
        <div>
          <h2 className="text-white text-md font-light">
            Enroll Now to Start Learning and Building the Project
          </h2>
          <Button className="bg-white mt-3 w-full text-primary hover:bg-white hover:text-primary cursor-pointer">
            Enroll Now
          </Button>
        </div>
      ) : (
        <div>
          <h2 className="text-white text-md font-light">
            Buy Monthly Membership and Get Access to All Courses
          </h2>
          <Button className="bg-white mt-3 w-full text-primary hover:bg-white hover:text-primary cursor-pointer">
            Buy Membership Just $2.99
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;
