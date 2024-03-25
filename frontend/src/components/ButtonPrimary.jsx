import React from 'react';

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button
      className="mt-3 rounded-xl bg-limeMain px-4 py-3 font-bold uppercase tracking-widest text-white hover:bg-limeHover"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
