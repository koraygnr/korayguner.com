import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

interface ILayout {
  children: JSX.Element;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Head>
        <title>korayguner | Frontend Developer</title>
        <meta
          name="description"
          content="frontend, javascript, css, html, reactjs, redux, tailwindcss"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
