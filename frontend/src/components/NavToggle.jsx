import React from 'react';
import NavLinkBar from './NavLinkBar';

const NavToggle = () => {
  return (
    <nav className="mb-6 flex justify-center">
      <ul className="flex  tracking-wide">
        <li>
          <NavLinkBar linkTo="places">Places</NavLinkBar>
        </li>
        <li>
          <NavLinkBar linkTo="countries">Countries</NavLinkBar>
        </li>
        <li>
          <NavLinkBar linkTo="continents">Continents</NavLinkBar>
        </li>
      </ul>
    </nav>
  );
};

export default NavToggle;
