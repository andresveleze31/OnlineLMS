"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {

  const {user, isLoaded} = useUser();
 
  return (
    <div className="p-4 bg-white flex justify-between">
      {/* Search Bar */}
      <div className="flex gap-2 border p-2 rounded-md">
        <Search className="w-5 h-5" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>
      {/* Get Started Button & bell Icon */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-400 w-5 h-5" />
        {isLoaded && user ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header
