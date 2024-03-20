import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const AppLayout = () => {
  return (
    // <div className="mx-6 grid h-screen grid-rows-[auto_1fr_auto] py-3">
    <div className="mx-6 grid h-screen py-2">
      {/* <Header /> */}
      <main className="h-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
