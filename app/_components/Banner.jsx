import { Button } from "@/components/ui/button";
import { Brain, Key, Medal, Play, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-banner">
        <div className=" contenedor flex justify-end px-20 py-65">
          <div className="md:w-1/2">
            <h2 className="text-white text-5xl font-bold">
              Build Skills With Experts Any Time, Anywhere
            </h2>
            <p className="text-white mt-5">
              Select the course that allows you to advance in your career
              development, learn from the experts and enjoy the whole journey
            </p>
            <Link href={"/courses"}>
              <Button className="mt-5">
                <Users />
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-[#131836] py-8 ">
          <div className="contenedor w-full place-items-center grid md:grid-cols-3 gap-10 md:gap-0">
            <div className="flex items-center gap-4 ">
              <div className="bg-white/10 p-4 rounded-full">
                <Play className="text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  35,000 online courses
                </h3>
                <p className="text-white text-sm">
                  Enjoy a variety of fresh topics
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="bg-white/10 p-4 rounded-full">
                <Medal className="text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  Expert instruction{" "}
                </h3>
                <p className="text-white text-sm">
                  Find the right instructor for you{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="bg-white/10 p-4 rounded-full">
                <Key className="text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  Lifetime access{" "}
                </h3>
                <p className="text-white text-sm">Learn on your schedule </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
