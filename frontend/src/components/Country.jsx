import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../slices/currentSlice';

const Country = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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
          const lat = data.capitalInfo.latlng[0];
          const lng = data.capitalInfo.latlng[1];
          console.log(Object.keys(data.currencies));
          dispatch(setCurrent({ lat, lng }));
        } catch (err) {
          console.log(err);
        }
      }
      getCountryInfoHandler();
    }
  }, [setCountry, id]);

  if (!country) return <Spinner />;

  return (
    <ul className="flex flex-col gap-8 rounded-xl bg-greyLight px-6 py-6">
      <li>
        <h2 className="pb-2 text-center text-2xl font-bold ">
          {country.name.common}
        </h2>
        {country.name.common !== country.name.official && (
          <h3 className="text-center text-xl font-semibold text-limeMain">
            {country.name.official}
          </h3>
        )}
      </li>
      <li>
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
      </li>
      <ul className="flex flex-col gap-3">
        <li>
          <span className="font-bold">Population:</span> {country.population}
        </li>
        <li>
          <span className="font-bold">Area:</span> {country.area} km2
        </li>
        <li>
          {' '}
          <span className="font-bold">Continent:</span>{' '}
          {country.continents.length === 1 ? (
            country.continents[0]
          ) : (
            <ul>
              {country.continents.map((continent) => (
                <li className="mr-1">{continent}</li>
              ))}
            </ul>
          )}
        </li>
        <li>
          {' '}
          <span className="font-bold">Subregion:</span> {country.subregion}
        </li>
        <li>
          <span className="font-bold">Capital:</span> {country.capital}
        </li>
        <li>
          <span className="font-bold">Currencies:</span>{' '}
          {Object.keys(country.currencies).length === 1 ? (
            Object.keys(country.currencies)[0]
          ) : (
            <ul>
              {Object.keys(country.currencies).map((currency) => (
                <li className="mr-1" key={currency}>
                  {currency}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <span className="font-bold">Timezones:</span>{' '}
          {country.timezones.length === 1 ? (
            country.timezones[0]
          ) : (
            <ul>
              {country.timezones.map((timezone, index) => (
                <li className="mr-1" key={index}>
                  {timezone}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            to={country.maps.googleMaps}
            className="underline hover:text-limeMain hover:no-underline	"
          >
            &rarr; Check {country.name.common} on Google Maps
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default Country;
