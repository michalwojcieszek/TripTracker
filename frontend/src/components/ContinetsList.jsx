import React from 'react';
import { useSelector } from 'react-redux';
import { ImEarth } from 'react-icons/im';

const ContinetsList = () => {
  const places = useSelector((state) => state.places);

  const continents = places.reduce((acc, cur) => {
    if (!acc.includes(cur.continent)) {
      return [...acc, cur.continent];
    } else {
      return acc;
    }
  }, []);

  console.log(continents);

  return (
    <>
      {places.length === 0 ? (
        <h2 className="text-center text-2xl font-bold ">
          You have no trips yet. <br />
          Tap on map to add some.
        </h2>
      ) : (
        <h2 className="mb-5 text-center text-2xl font-bold ">
          Continets visited during your{' '}
          <span className="text-limeMain">trips</span>
        </h2>
      )}
      <ul className="flex w-full flex-col gap-4 ">
        {continents.map((continent) => (
          <li
            className={`z-50 flex w-full items-center justify-between overflow-x-hidden rounded-xl border-l-8 border-l-limeMain bg-greyLight px-5 py-3 transition-transform hover:translate-x-2`}
            key={continent}
          >
            <div className="flex items-center gap-2">
              <ImEarth className="text-xl" />

              <h3 className="text-lg font-bold">{continent}</h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContinetsList;
