import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    //className not applying in AddPlaceForm
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
