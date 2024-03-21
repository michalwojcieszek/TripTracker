import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CountriesList = () => {
  const places = useSelector((state) => state.places);
  const navigate = useNavigate();

  const countries = places.reduce((acc, cur) => {
    if (!acc.map((el) => el.country).includes(cur.country)) {
      return [...acc, { country: cur.country, countryCode: cur.countryCode }];
    } else {
      return acc;
    }
  }, []);

  return (
    <>
      {places.length === 0 ? (
        <h2 className="mb-5 text-center text-2xl font-bold ">
          You have no trips yet. <br />
          Tap on map to add some.
        </h2>
      ) : (
        <h2 className="mb-5 text-center text-2xl font-bold ">
          Countries visited during your{' '}
          <span className="text-limeMain">trips</span>
        </h2>
      )}
      <ul className="flex w-full flex-col gap-4 ">
        {countries.map((country) => (
          <li
            className={`z-50 flex w-full items-center justify-between overflow-x-hidden rounded-xl border-l-8 border-l-limeMain bg-greyLight px-5 py-3 transition-transform hover:translate-x-2`}
            key={country.countryCode}
            onClick={() => navigate(`${country.countryCode}`)}
          >
            <div className="flex items-center gap-2">
              <img
                alt="Country flag"
                width="30rem"
                src={`https://flagsapi.com/${country.countryCode}/flat/64.png`}
              />
              <h3 className="text-lg font-bold">{country.country}</h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountriesList;
