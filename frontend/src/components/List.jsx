import React from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';

const List = () => {
  const places = useSelector((state) => state.places);

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

  return (
    <>
      <h2 className="justfy-center py-5 text-2xl font-bold ">
        Your <span className="text-limeMain">trips</span>
      </h2>
      <ul className="flex w-full flex-col gap-4 ">
        {places.map((place) => (
          <li className="bg-greyLight z-50 flex w-full items-center justify-between overflow-x-hidden rounded-xl border-l-8 border-l-limeMain px-5 py-3 transition-transform hover:translate-x-2">
            <div>
              <h3 className="text-lg font-bold">{place.place}</h3>
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
            <button>
              <MdOutlineCancel className="text-greyMedium text-3xl hover:text-red-500" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
