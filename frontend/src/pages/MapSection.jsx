import React from 'react';
import Map from '../components/Map';
import { Navigate, Outlet } from 'react-router-dom';
import NavToggle from '../components/NavToggle';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import Logout from '../components/Logout';
import L from 'leaflet';

const MapSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(L.Browser.mobile);
  return userInfo ? (
    <>
      <section className="relative h-full shadow-[0_0px_32px_-0px_rgba(0,0,0,0.1)]	drop-shadow-sm md:flex">
        <div className="flex flex-col items-center justify-between overflow-y-auto rounded-l bg-white px-3 pb-2 pt-10 sm:px-8  md:w-3/5 md:px-5 md:pb-3 xl:w-2/5	">
          <div className="flex w-full flex-col justify-end">
            <AppHeader />
            <NavToggle />
            <Outlet />
          </div>
          <Footer styleToAdd="hidden" />
          {L.Browser.mobile && (
            <description className="mt-6 text-greyMain">
              use two fingers to move on the map
            </description>
          )}
        </div>
        <Map />
        <Logout />
        <Footer styleToAdd="md:hidden" />
      </section>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default MapSection;
