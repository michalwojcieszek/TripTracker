import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <header className="bg-greyLight px-2 py-6">
        <div>
          <Logo />
        </div>
      </header>
      <main className="flex h-full items-center justify-center px-4 py-6">
        <div className="rounded-md bg-greyLight px-5 py-4 lg:w-1/3">
          <Outlet />
        </div>
      </main>
      <div className="bg-greyLight px-6 py-4">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
