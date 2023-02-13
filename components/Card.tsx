import { Repo } from '@/types/types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';

interface ICard {
   item: Repo
}


function Card({ item }:ICard) {
  return (
   <Link href={item.link} target="_blank" className='group'>
       <div className='group flex flex-col w-full justify-between gap-4 py-4 border-b border-primary-dark'>
      <div className='h-36'>
         <h1 className='text-primary-dark text-3xl font-bold pb-4 group-hover:underline'>{item.repo}</h1>
         <p className='max-w-lg'>{item.description}</p>
      </div>
      <div>
         <button className='flex items-center  gap-2 text-primary-purple font-semibold'>
            Open with GitHub <RiShareBoxFill />
         </button>
      </div>
    </div>
   </Link>

  );
}

export default Card;
