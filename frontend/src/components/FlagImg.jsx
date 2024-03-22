import React, { useState } from 'react';

const FlagImg = ({ code }) => {
  const [isError, setIsError] = useState(false);

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <>
      {!isError && (
        <img
          alt="Country flag"
          width="30rem"
          src={`https://flagsapi.com/${code}/flat/64.png`}
          onError={handleImageError}
          style={{ display: isError ? 'none' : 'block' }}
        />
      )}
    </>
  );
};

export default FlagImg;
