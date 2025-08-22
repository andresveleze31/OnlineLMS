import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton, useUser } from "@clerk/nextjs";
import { Layout, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HomeHeader = () => {
  const router = useRouter();

  const { user, isLoaded } = useUser();

  return (
    <div>
      <div className="bg-primary/10 py-3">
        <div className="contenedor flex justify-between ">
          <div className="flex items-center gap-2">
            <p className="text-gray-500">Have any questions</p>
            <Phone className="size-4 text-primary" />
            <p>+1-485-456-0102</p>
          </div>
          <Link className="hidden md:flex" href={"/courses"}>
            Apply Online
          </Link>
        </div>
      </div>

      <header className="contenedor flex justify-between items-center py-5">
        <div className="flex gap-3 items-center">
          <Image src={"/logo.svg"} alt="logo" width={170} height={80} />
          <Input placeholder="Search for anything" />
        </div>
        <div className="hidden md:flex gap-4 items-center ">
          <Link href={"/"}>Home</Link>
          <Link href={"/courses"}>Courses</Link>
          <Link href={"/dashboard"}>My Course</Link>
        </div>

        {user ? (
          <div className="hidden md:flex items-center gap-3">
            <UserButton />
            <Link href={"/dashboard"}>
              <Button>
                <Layout />
                Continue to Dashboard
              </Button>
            </Link>
          </div>
        ) : (
          <Button>
            <User />
            Login/Register
          </Button>
        )}
      </header>
    </div>
  );
};

export default HomeHeader;
