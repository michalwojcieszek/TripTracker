import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (id) {
      async function getCountryInfoHandler() {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${id}
          `,
          );
          const [data] = await res.json();
          setCountry(data);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
      getCountryInfoHandler();
    }
  }, [setCountry, id]);

  if (!country) return <Spinner />;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="pb-2 pt-5 text-center text-2xl font-bold ">
          {country.name.common}
        </h2>
        <h3 className="text-center text-xl font-semibold text-limeMain">
          {country.name.official}
        </h3>
      </div>
      <div>
        <div className=" flex space-x-4">
          <div className="flex flex-1 items-center justify-center">
            <img
              alt={country.coatOfArms.alt}
              src={country.coatOfArms.png}
              className="max-w-28"
            />
          </div>
          <div className=" flex flex-1 items-center justify-center py-8">
            <div className="flex flex-col items-center">
              <img
                alt={country.flags.alt}
                src={country.flags.png}
                className="max-h-24 shadow-[0_0px_32px_-0px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center">Coat of arms of {country.name.common}</p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center">Flag of {country.name.common}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <p>
          {' '}
          <span className="font-bold">Subregion:</span> {country.subregion}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
