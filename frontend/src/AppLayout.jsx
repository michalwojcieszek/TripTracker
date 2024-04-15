import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="mx-3 grid h-dvh py-4 sm:mx-6">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
