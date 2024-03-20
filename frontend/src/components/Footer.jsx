import React from "react";

const Footer = () => {
  return (
    <p className="text-limeMain font-bold">
      {" "}
      &copy; Copyright {new Date().getFullYear()} by Michal Wojcieszek
    </p>
  );
};

export default Footer;
