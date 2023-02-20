import { Repo } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import Skeleton from './Skeleton';

interface ICard {
  item: Repo;
  isLoading: Boolean;
}

function Card({ item, isLoading }: ICard) {
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Link href={item.link} target='_blank' className='group'>
          <div className='group flex flex-col w-full justify-between gap-4 py-4 border-b border-primary-dark'>
            <div className='h-36 overflow-hidden '>
              <h1 className='text-primary-dark text-3xl font-bold pb-4 group-hover:underline'>
                {item.repo}
              </h1>
              <p className='max-w-lg'>{item.description}</p>
            </div>
            <div>
              <button className='flex items-center gap-2 text-primary-purple font-semibold'>
                Open with GitHub <RiShareBoxFill />
              </button>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Card;
