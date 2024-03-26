import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { setCurrent } from '../slices/currentSlice';
import Spinner from '../components/Spinner';

const Place = () => {
  const { id } = useParams();
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();
  const place = places.find((place) => place._id === id);

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

  useEffect(() => {
    if (place) {
      dispatch(setCurrent({ lat: place.coords.lat, lng: place.coords.lng }));
    }
  }, [place, dispatch]);

  if (!place) return <Spinner />;

  return (
    <>
      <Link to="/places">
        <button className="my-2 inline rounded-md border-2 border-solid border-greyMain px-2 py-1 text-sm text-greyMain hover:border-black hover:text-black">
          &larr; Go back
        </button>
      </Link>
      <ul className="flex flex-col gap-8 rounded-xl bg-greyLight px-6 py-6">
        <li>
          <h2
            className={`mb-2 text-center text-2xl font-bold ${place.city ? '' : 'text-limeMain'}`}
          >
            {place.city ? place.city : place.region}
          </h2>
          {place.city && (
            <h3 className="mb-4 text-center text-xl font-semibold text-limeMain">
              {place.region}
            </h3>
          )}
          <div className="flex flex-col items-center justify-center ">
            <div className=" flex items-center justify-center ">
              <img
                alt="Country flag"
                src={`https://flagsapi.com/${place.countryCode}/flat/64.png`}
              />
            </div>
            <h4 className="text-center text-xl font-semibold">
              {place.country}
            </h4>
          </div>
        </li>
        <li className="text-center">
          You went to{' '}
          <span className="font-bold">
            {place.city ? place.city : place.region}
          </span>{' '}
          on {formatDate(place.date)}
        </li>
        <li>
          <div className="flex flex-col items-center gap-2 whitespace-normal">
            {place.description ? (
              <>
                <p className="text-lg font-bold">Your notes about the trip:</p>
                <div>
                  <p>{place.description}</p>
                </div>
              </>
            ) : (
              <p className=" text-lg font-bold">
                You have no notes about the trip
              </p>
            )}
          </div>
        </li>
      </ul>
    </>
  );
};

export default Place;
