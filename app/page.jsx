"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton, useUser } from "@clerk/nextjs";
import { Layout, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomeHeader from "./_components/HomeHeader";
import Banner from "./_components/Banner";
import CoursesHome from "./_components/CoursesHome";
import CategoriesHome from "./_components/CategoriesHome";
import Footer from "./_components/Footer";

export default function Home() {
  const router = useRouter();

  const { user, isLoaded } = useUser();

  useEffect(() => {
    // if(user){
    //   router.push("/dashboard")
    // }
    // else{
    //   isLoaded&&router.push("/courses")
    // }
  }, [user]);

  return (
    <div>
      <HomeHeader />
      <Banner />
      <CategoriesHome />
      <CoursesHome />
      <Footer />
    </div>
  );
}
