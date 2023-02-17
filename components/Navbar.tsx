import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

function Navbar() {
  return (
    <header className='container max-w-7xl relative mx-auto h-full flex items-center lg:justify-center py-4 md:py-8  '>
      <nav>
        <AiOutlineMenu className='text-2xl lg:hidden' />
        <ul className='hidden  items-center text-sm font-bold transition-all duration-200 lg:flex lg:space-x-20'>
          <a href='#about'>
            <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
              ABOUT
            </li>
          </a>
          <a href='#projects'>
            <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
              PROJECTS
            </li>
          </a>
          <a href='#contact'>
            <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
              CONTACT
            </li>
          </a>
        </ul>
      </nav>
      <div className='absolute right-0 pr-6 md:pr-12 xl:pr-0 transition-all duration-200'>
        <Link href='https://github.com/koraygnr' target='_blank'>
          <FaGithub className='text-2xl cursor-pointer hover:text-primary-purple transition-all duration-300' />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
