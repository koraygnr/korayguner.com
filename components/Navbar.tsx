import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className='relative w-full flex items-center lg:justify-center py-6 lg:pt-16'>
      <div>
        <AiOutlineMenu className='text-2xl lg:hidden' />
        <ul className='hidden  items-center text-sm font-bold transition-all duration-200 lg:flex lg:space-x-20'>
          <li className='hover:text-black cursor-pointer'>ABOUT</li>
          <li className='hover:text-black cursor-pointer'>PROJECTS</li>
          <li className='hover:text-black cursor-pointer'>CONTACT</li>
        </ul>
      </div>
      <div className='absolute right-0 '>
        <FaGithub className='text-2xl cursor-pointer hover:text-primary-purple transition-all duration-300' />
      </div>
    </nav>
  );
}

export default Navbar;
