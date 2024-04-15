import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { RiLandscapeFill } from 'react-icons/ri';
import { FaBuildingColumns } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { setPlaces } from '../slices/placesSlice';
import NoTripsYetText from '../components/NoTripsYetText';
import FlagImg from '../components/FlagImg';
import Spinner from '../components/Spinner';
import {
  useDeleteTripMutation,
  useGetTripsMineQuery,
} from '../slices/tripsApiSlice';
import { toast } from 'react-toastify';

const PlacesList = () => {
  const places = useSelector((state) => state.places);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data,
    isLoading: isLoadingGet,
    error,
    refetch,
  } = useGetTripsMineQuery();
  const [deleteTrip, { isLoading: isLoadingDelete }] = useDeleteTripMutation();

  useEffect(() => {
    dispatch(setPlaces(data));
    refetch();
  }, [dispatch, data, refetch]);

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

  async function deleteTripHandler(id, e) {
    e.stopPropagation();
    console.log(id);
    try {
      const { data } = await deleteTrip(id);
      dispatch(setPlaces(data));
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return isLoadingGet || isLoadingDelete ? (
    <Spinner />
  ) : error ? (
    <p>{error}</p>
  ) : (
    <>
      {places.length === 0 || !data ? (
        <NoTripsYetText />
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
            className={`z-50 flex w-full cursor-pointer items-center justify-between overflow-x-hidden rounded-xl border-l-8 border-l-limeMain bg-greyLight px-5 py-3 transition-transform duration-500	 hover:translate-x-2`}
            onClick={() => navigate(`${place._id}`)}
            key={place._id}
          >
            <div>
              <div className="flex items-center gap-2">
                {place.city ? (
                  <FaBuildingColumns className="shrink-0 text-sm" />
                ) : (
                  <RiLandscapeFill className="text-md shrink-0" />
                )}
                <h3 className="text-lg font-bold">
                  {place.city ? place.city : place.region}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <FlagImg code={place.countryCode} />
                <p>{place.country}</p>
              </div>
              <p className="text-greyMain">{formatDate(place.date)}</p>
            </div>
            <button
              className="text-3xl text-greyMedium hover:text-red-500"
              onClick={(e) => deleteTripHandler(place._id, e)}
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
