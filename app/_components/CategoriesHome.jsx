import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import Image from 'next/image';
import React from 'react'

const CategoriesHome = () => {
  return (
    <div className='bg-gray-100'>
      <div className="contenedor py-20">
        <div className="flex flex-col gap-4 justify-center  items-center">
          <p className="uppercase text-primary text-center">
            Learn how it works
          </p>
          <h3 className="text-4xl text-center font-bold w-1/3">
            See the platform
          </h3>
          <p className="text-gray-500 text-sm mb-5 text-center w-1/3">
            Online video courses with new additions published every month.
          </p>
        </div>
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}

export default CategoriesHome
