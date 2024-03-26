import React from 'react';
import Map from '../components/Map';
import { Navigate, Outlet } from 'react-router-dom';
import NavToggle from '../components/NavToggle';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import Logout from '../components/Logout';

const MapSection = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? (
    <>
      <section className="relative flex	h-full shadow-[0_0px_32px_-0px_rgba(0,0,0,0.1)] drop-shadow-sm">
        <div className="flex w-2/5 flex-col items-center justify-between overflow-y-auto  rounded-l bg-white px-8 py-10	">
          <div className="flex w-full flex-col justify-end">
            <AppHeader />
            <NavToggle />
            <Outlet />
          </div>
          <Footer />
        </div>
        <Map />
        <Logout />
      </section>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default MapSection;
