import React from 'react';
import Map from './Map';
import { NavLink, Outlet } from 'react-router-dom';

const MapSection = () => {
  return (
    <>
      <section className="flex h-5/6 shadow-[0_0px_32px_-0px_rgba(0,0,0,0.1)] drop-shadow-sm">
        <div className="flex w-2/5 flex-col items-center overflow-y-auto rounded-l  bg-white px-5 py-10">
          <NavLink to="/list">List</NavLink>
          <Outlet />
        </div>
        <Map />
      </section>
    </>
  );
};

export default MapSection;
