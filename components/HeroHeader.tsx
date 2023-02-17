import Image from 'next/image';
import React from 'react';
import profilePhoto from '../assets/profilePhoto.jpg';
import Bounce from './Bounce';

function HeroHeader() {
  return (
    <section className='relative flex w-full h-[80vh] pb-10'>
      <div className='flex flex-col items-center justify-center w-full  space-y-6 lg:flex-row md:items-center xl:space-x-12 '>
        <p className='max-w-xs text-5xl font-bold leading-[37px] md:max-w-md md:text-6xl md:leading-[46px] lg:text-7xl lg:leading-[55px] transition-all duration-300'>
          KORAY
          <br /> GUNER <span className='text-primary-purple'>
            FRONTEND
          </span>{' '}
          DEVELOPER
        </p>
        <div className='flex items-center justify-center max-w-xs md:max-w-md'>
          <Image
            src={profilePhoto}
            alt='profilePhoto'
            className='border-r-8 border-b-8 border-primary-purple'
            priority
          />
        </div>
      </div>
      <div className='hidden w-full pl-12 lg:pl-0 absolute bottom-2 md:flex justify-start lg:justify-center'>
        <Bounce />
      </div>
    </section>
  );
}

export default HeroHeader;
