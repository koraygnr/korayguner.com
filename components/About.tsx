import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaLinkedin,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiFirebase,
  SiAdobephotoshop,
  SiFigma,
  SiJavascript,
} from 'react-icons/si';

function About() {
  return (
    <main className='container flex relative justify-center max-w-7xl mx-auto py-10'>
      <article className='flex flex-col justify-center items-center max-w-3xl py-10 space-y-10'>
        <p className='text-primary-light md:text-center text-4xl font-bold '>
          Hi, I’m Koray
        </p>
        <p className='text-primary-light md:text-center font-light text-lg leading-8 '>
          I am a Software Engineer who is passionate about software and design
          with Geophyscal Engineering background. I follow web technologies
          closely and try to keep up to date and improve myself. That's why I'm
          improving myself on Javascript and React every day.
        </p>
        <button className='flex items-center gap-1 border-2 border-primary-purple text-primary-light font-medium  py-3 px-8 rounded-md'>
          <FaLinkedin /> LinkedIn
        </button>
        <div className='absolute -bottom-6 flex flex-wrap md:flex-nowrap py-4 gap-y-2 justify-center w-full text-3xl space-x-4 md:space-x-10  bg-primary-dark text-primary-light/20 md:text-4xl md:-bottom-10 md:py-6 md:px-10  md:bg-primary-purple md:text-primary-dark'>
          <FaHtml5 />
          <FaCss3Alt />
          <SiJavascript />
          <SiTypescript />
          <FaReact />
          <SiRedux />
          <SiTailwindcss />
          <FaSass />
          <SiChakraui />
          <FaBootstrap />
          <SiFirebase />
          <SiAdobephotoshop />
          <SiFigma />
        </div>
      </article>
    </main>
  );
}

export default About;
