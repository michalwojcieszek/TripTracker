import React from 'react';
import Map from './Map';
import { Outlet } from 'react-router-dom';
import NavToggle from './NavToggle';
import { ImLocation } from 'react-icons/im';

const MapSection = () => {
  return (
    <>
      <section className="flex h-dvh	shadow-[0_0px_32px_-0px_rgba(0,0,0,0.1)] drop-shadow-sm">
        <div className="flex w-2/5 flex-col items-center overflow-y-auto rounded-l  bg-white px-8 py-10">
          <div className="w-full">
            <header className="mb-4 flex items-center justify-center gap-2 bg-white px-4 py-5">
              <ImLocation className="text-5xl text-limeMain" />
              <h1 className="text-5xl font-extrabold">
                <span className="text-limeMain">Trip</span>
                <span>Tracker</span>
              </h1>
            </header>
            <NavToggle />
            <Outlet />
          </div>
        </div>
        <Map />
      </section>
    </>
  );
};

export default MapSection;
