import React from 'react';
import { SlClose } from 'react-icons/sl';

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropMenu({ setIsOpen }: IProps) {
  return (
    <div className='fixed top-0 left-0 z-30 h-screen w-full bg-primary-dark'>
      <div className='container flex flex-col space-y-10 max-w-7xl mx-auto'>
        <div>
          <SlClose
            className='text-primary-light text-4xl cursor-pointer hover:text-primary-rose'
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div>
          <ul className='flex flex-col justify-center items-center md:items-start text-primary-light md:text-left text-xl md:text-4xl font-bold space-y-2'>
            <a href='#' onClick={() => setIsOpen(false)}>
              <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
                HOME
              </li>
            </a>
            <a href='#about' onClick={() => setIsOpen(false)}>
              <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
                ABOUT
              </li>
            </a>
            <a href='#projects' onClick={() => setIsOpen(false)}>
              <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
                PROJECTS
              </li>
            </a>
            <a href='#contact' onClick={() => setIsOpen(false)}>
              <li className='hover:text-primary-purple transition-all duration-300 cursor-pointer'>
                CONTACT
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
