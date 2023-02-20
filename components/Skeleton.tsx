import React from 'react';

function Skeleton() {
  return (
    <div className='animate-pulse'>
      <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
      <div className='h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-4'></div>
      <div className='h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-4'></div>
      <div className='h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-4'></div>
      <div className='h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-4'></div>
      <div className='h-2 bg-gray-300 rounded-full dark:bg-gray-700'></div>
    </div>
  );
}

export default Skeleton;
