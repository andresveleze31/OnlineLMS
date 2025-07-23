"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SideBanners = () => {
  const [sideBannerList, setSideBannerList] = useState();

  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      console.log(resp);
      setSideBannerList(resp.sideBanners);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {sideBannerList?.map((item, index) => (
        <div key={index}>
          <Image
            onClick={() => window.open(item?.url)}
            className="rounded-xl cursor-pointer"
            src={item.banner.url}
            alt="banner"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBanners;
