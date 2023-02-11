import Image from 'next/image';
import React from 'react';
import profilePhoto from '../assets/profilePhoto.jpg';
import Bounce from './Bounce';

function HeroHeader() {
  return (
    <section className='relative flex items-center  h-[70vh] md:h-[80vh]'>
      <div className='flex flex-col items-center justify-center w-full space-y-6 lg:flex-row md:items-center xl:space-x-12 '>
        <p className='max-w-xs text-5xl font-bold leading-[37px] md:max-w-md md:text-7xl md:leading-[55px] transition-all duration-300'>
          KORAY GUNER <span className='text-primary-purple'>FRONTEND</span>{' '}
          DEVELOPER
        </p>
        <div className='flex items-center justify-center max-w-sm md:max-w-md'>
          <Image
            src={profilePhoto}
            alt='profilePhoto'
            className='border-r-8 border-b-8 border-primary-purple'
          />
        </div>
      </div>
      <div className='hidden absolute bottom-8 md:flex w-full justify-start lg:justify-center'>
        <Bounce />
      </div>
    </section>
  );
}

export default HeroHeader;
