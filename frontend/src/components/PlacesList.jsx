import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { RiLandscapeFill } from 'react-icons/ri';
import { FaBuildingColumns } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { removePlace } from '../slices/placesSlice';

const PlacesList = () => {
  const places = useSelector((state) => state.places);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

  function deleteTripHandler(id, e) {
    e.stopPropagation();
    dispatch(removePlace(id));
  }

  return (
    <>
      {places.length === 0 ? (
        <h2 className="text-center text-2xl font-bold ">
          You have no trips yet. <br />
          Tap on map to add some.
        </h2>
      ) : (
        <h2 className="mb-5 text-center text-2xl font-bold ">
          Your <span className="text-limeMain">trips</span>
        </h2>
      )}
      <ul
        className="flex w-full flex-col gap-4"
        // style={{ height: '65vh' }}
      >
        {places.map((place) => (
          <li
            className={`z-50 flex w-full items-center justify-between overflow-x-hidden rounded-xl border-l-8 border-l-limeMain bg-greyLight px-5 py-3 transition-transform hover:translate-x-2`}
            onClick={() => navigate(`${place.tripId}`)}
            key={place.tripId}
          >
            <div>
              <div className="flex items-center gap-2">
                {place.city ? (
                  <FaBuildingColumns className="text-sm" />
                ) : (
                  <RiLandscapeFill className="text-md" />
                )}
                <h3 className="text-lg font-bold">
                  {place.city ? place.city : place.region}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <img
                  alt="Country flag"
                  width="30rem"
                  src={`https://flagsapi.com/${place.countryCode}/flat/64.png`}
                />{' '}
                <p>{place.country}</p>
              </div>
              <p className="text-greyMain">{formatDate(place.date)}</p>
            </div>
            <button
              className="text-3xl text-greyMedium hover:text-red-500"
              onClick={(e) => deleteTripHandler(place.tripId, e)}
            >
              <MdOutlineCancel />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlacesList;
