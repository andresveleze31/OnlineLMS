import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E1424] ">
      <div className="contenedor py-20 px-10 md:px-0">
        <div className="grid md:grid-cols-6 gap-3">
          <div className="col-span-2">
            <Image src={"/logo.svg"} width={120} height={50} alt="Logo" />
            <p className="text-white text-sm mt-5">
              Openup is an artificial intelligence trained to automate important
              tasks such writing optimized product descriptions.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <FaFacebook className="text-white/70 size-5" />
              <FaTwitter className="text-white/70 size-5" />
              <FaLinkedin className="text-white/70 size-5" />
              <FaWhatsapp className="text-white/70 size-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className=" text-white font-bold">Company</h3>
            <div className="flex flex-col gap-5 mt-5">
              <p className="text-white text-sm">About Us</p>
              <p className="text-white text-sm">Community</p>
              <p className="text-white text-sm">Career’s </p>
              <p className="text-white text-sm">Affiliate Program</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className=" text-white font-bold">Use Cases</h3>
            <div className="flex flex-col gap-5 mt-5">
              <p className="text-white text-sm">For Teams</p>
              <p className="text-white text-sm">For Email Marketers</p>
              <p className="text-white text-sm">For Blog Writers</p>
              <p className="text-white text-sm">For Social Managers</p>
            </div>
          </div>

          <div className="col-span-2 flex flex-col">
            <h3 className=" text-white font-bold">News & Update</h3>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <Input className="col-span-2" placeholder="Enter your email" />
              <Button className=" text-white hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            <p className="text-white mt-5">
              Subscribe our newsletter for future updates. don’t worry we don’t
              spam your email address
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
