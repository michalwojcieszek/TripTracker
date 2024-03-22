import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="py-3 text-center text-2xl font-bold">Page not found</h2>
      <p>
        <Link
          to="/login"
          className="underline underline-offset-2 hover:no-underline"
        >
          &rarr; Go to the main page
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
