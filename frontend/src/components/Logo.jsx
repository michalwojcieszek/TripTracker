import React from 'react';
import { ImLocation } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/login">
      <div className="flex items-center justify-center gap-2">
        <ImLocation className="bounce text-5xl text-limeMain" />
        <h1 className="text-5xl font-extrabold">
          <span className="text-limeMain">Trip</span>
          <span>Tracker</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
