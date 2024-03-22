import React from 'react';

const Footer = () => {
  return (
    <footer className="text-sm text-greyMain	">
      {' '}
      &copy; Copyright {new Date().getFullYear()} by Michal Wojcieszek
    </footer>
  );
};

export default Footer;
