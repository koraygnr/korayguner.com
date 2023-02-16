import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef();

  const sendEmail = (e: Event) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Successfully');
            setName('');
            setEmail('');
            setMessage('');
          }
          console.log(result.text);
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div className='bg-primary-dark'>
      <footer className='container flex flex-col relative max-w-7xl mx-auto py-32'>
        <div className='flex justify-between items-center w-full pb-4 border-b border-primary-light'>
          <p className='max-w-xs text-4xl font-bold text-primary-light md:max-w-md tracking-tighter transition-all duration-300'>
            CONTACT
          </p>
        </div>

        <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-2 lg:space-x-20 justify-between'>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className='flex flex-1 flex-col pt-10 space-y-4'
          >
            <input
              className='bg-primary-dark text-primary-light border-l-0 border-t-0 border-r-0 focus:ring-0 '
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='user_name'
              placeholder='Your Name'
              required
            />
            <input
              className='bg-primary-dark text-primary-light border-l-0 border-t-0 border-r-0 focus:ring-0 '
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='user_email'
              placeholder='Your Email'
              required
            />
            <textarea
              className='bg-primary-dark text-primary-light border-l-0 border-t-0 border-r-0 resize-none scrollbar-thin scrollbar-thumb-primary-purple scrollbar-track-gray-100 hover:cursor-default focus:ring-0 '
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              cols={30}
              rows={6}
              spellCheck='false'
              required
            ></textarea>
            <button className='flex justify-center  items-center w-32 gap-1 border-2 border-primary-purple text-primary-light font-medium py-3 px-8 rounded-md transition-all duration-300 hover:text-gray-400'>
              Send
            </button>
          </form>
          <div className='flex flex-1 flex-col space-y-8 '>
            <div className='pt-10'>
              <p className='text-primary-light text-xl md:text-3xl font-medium'>
                Want to reach out about a project, collobration or just want to
                say friendly hello?
                <Link href='mailto:korayguneer@gmail.com'>
                  <span className='text-primary-purple'>
                    {' '}
                    korayguneer@gmail.com
                  </span>
                </Link>
              </p>
            </div>
            <div className='text-primary-light'>
              <p className='text-lg font-semibold pb-2'>● SOCIAL</p>
              <ul className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6'>
                <Link
                  href='https://www.instagram.com/korayguner'
                  target='_blank'
                >
                  <li className='hover:underline hover:cursor-pointer'>
                    Instagram
                  </li>
                </Link>
                <Link href='https://twitter.com/korayguner' target='_blank'>
                  <li className='hover:underline hover:cursor-pointer'>
                    Twitter
                  </li>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/korayguner'
                  target='_blank'
                >
                  <li className='hover:underline hover:cursor-pointer'>
                    LinkedIn
                  </li>
                </Link>
                <Link href='https://github.com/koraygnr' target='_blank'>
                  <li className='hover:underline hover:cursor-pointer'>
                    GitHub
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className='bg-[#191918]'>
        <div className='flex justify-between items-center max-w-7xl px-6 py-4 md:px-12 mx-auto w-full bg-[#191918]'>
          <p className='text-xs font-light text-zinc-500 tracking-wide'>
            korayguner.com | 2023{' '}
          </p>
          <Link
            href='https://github.com/koraygnr/korayguner.com'
            target='_blank'
          >
            <p className='hidden md:inline-block text-xs font-light text-zinc-500 tracking-wide'>
              Go to source codes on Github
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
