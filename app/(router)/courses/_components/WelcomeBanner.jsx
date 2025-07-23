import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src={"/mencode.png"} alt="panda" width={100} height={100} />
      <div>
        <h2 className="font-bold text-4xl">
          Welcome to <span className="text-primary">Tweakbolt</span> Academy
        </h2>
        <h2 className="text-gray-400">Explore, Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
