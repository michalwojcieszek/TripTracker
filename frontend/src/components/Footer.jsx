import React from 'react';

const Footer = ({ styleToAdd = '' }) => {
  return (
    <footer className={`text-sm text-greyMain md:inline-block ${styleToAdd}`}>
      {' '}
      &copy; Copyright {new Date().getFullYear()} by Michal Wojcieszek
    </footer>
  );
};

export default Footer;
