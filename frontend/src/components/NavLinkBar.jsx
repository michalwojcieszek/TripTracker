import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkBar = ({ children, linkTo }) => {
  return (
    <NavLink
      className="m:py-1 w-full rounded-l bg-greyLight px-2 py-2 text-xs uppercase md:px-2 lg:px-5 lg:py-2"
      to={`/${linkTo}`}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkBar;
