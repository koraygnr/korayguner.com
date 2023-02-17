import About from '@/components/About';
import Footer from '@/components/Footer';
import HeroHeader from '@/components/HeroHeader';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Head>
        <title>KORAY GUNER | Frontend Developer</title>
        <meta
          name='description'
          content='frontend, javascript, css, html, reactjs, redux, tailwindcss'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      {/* HomeSection - Start */}
      <HeroHeader />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Projects Section */}
      <Footer />

      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  );
}
