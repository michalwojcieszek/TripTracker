import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-5">
      <h1 className="text-3xl font-extrabold">
        <span className="text-limeMain">Trip</span>
        <span>Tracker</span>
      </h1>
    </header>
  );
};

export default Header;
