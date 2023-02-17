import { Repo } from '@/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import Card from './Card';
import Spinner from './Spinner';

function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Repo[]>([]);
  const githubFetchURL =
    'https://gh-pinned-repos.egoist.dev/?username=koraygnr';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(githubFetchURL).then((res) => res.json());
        setData(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className='container flex flex-col space-y-6 justify-between max-w-7xl mx-auto py-20'
      id='projects'
    >
      <div className='flex justify-between items-center w-full pb-4 border-b border-primary-dark'>
        <p className='max-w-xs text-4xl font-bold md:max-w-md tracking-tighter transition-all duration-300'>
          PROJECTS
        </p>
        <Link href='https://github.com/koraygnr' target='_blank'>
          <button>
            <span className='flex text-xs text-end md:text-base md:text-start  items-center gap-2 text-primary-purple font-semibold hover:underline'>
              Go to Github for all projects <RiShareBoxFill />
            </span>
          </button>
        </Link>
      </div>
      <div
        className={`${
          isLoading
            ? 'flex justify-center py-4'
            : 'grid grid-cols-1 md:grid-cols-2 gap-10'
        }`}
      >
        {isLoading ? (
          <Spinner color='fill-primary-purple' />
        ) : (
          data.map((item, i) => <Card item={item} key={i} />)
        )}
      </div>
    </div>
  );
}

export default Projects;
