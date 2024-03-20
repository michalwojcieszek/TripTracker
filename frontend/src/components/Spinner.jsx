import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div class="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-limeMain" />
    </div>
  );
};

export default Spinner;
