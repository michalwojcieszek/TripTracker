import React from 'react';
import { NavLink } from 'react-router-dom';

const NavToggle = () => {
  return (
    <nav className="mb-6 flex justify-center">
      <ul className="flex ">
        <li>
          <NavLink
            className="rounded-l bg-greyLight px-5 py-2 text-xs uppercase"
            to="/places"
          >
            Places
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" bg-greyLight px-5 py-2 text-xs uppercase"
            to="/countries"
          >
            Countries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/continents"
            className=" rounded-r bg-greyLight px-5 py-2 text-xs uppercase"
          >
            Continents
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavToggle;
