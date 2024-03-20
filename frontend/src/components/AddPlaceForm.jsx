import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace } from '../slices/placesSlice';
import { clearCurrent } from '../slices/currentSlice';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const AddPlaceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const current = useSelector((state) => state.current);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [continent, setContinent] = useState('');

  useEffect(() => {
    if (current) {
      const { lat, lng } = current;
      setLatitude(lat);
      setLongitude(lng);
      async function fetchGeolocationData() {
        try {
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const { city, countryCode, countryName, continent } =
            await res.json();
          setPlace(city);
          setCountry(countryName);
          setContinent(continent);
          setCountryCode(countryCode);
          console.log(city, countryCode, countryName);
        } catch (err) {
          console.log('failed to fetch');
        }
      }
      fetchGeolocationData();
    }
  }, [setLatitude, setLongitude, current]);

  function addTripHandler(e) {
    e.preventDefault();
    dispatch(
      addPlace({
        coords: { lat: latitude, lng: longitude },
        place,
        country,
        countryCode,
        date: date.toISOString(), // Convert Date to ISO string
        description,
        continent,
      }),
    );
    setLatitude('');
    setLongitude('');
    setPlace('');
    setCountry('');
    setCountryCode('');
    setDate(new Date());
    setDescription('');
    dispatch(clearCurrent());
    navigate('/list');
  }

  return (
    <>
      <h2 className="justfy-center py-5 text-2xl font-bold ">
        Add your <span className="text-limeMain">trip</span>
      </h2>
      <form onSubmit={addTripHandler} className="flex flex-col gap-2">
        <label>Latitude</label>
        <input value={latitude} disabled readOnly className="bg-yellow-100" />
        <label>Longitude</label>
        <input value={longitude} disabled readOnly className="bg-yellow-100" />
        <label>Country</label>
        {current && (
          <img
            alt="Country flag"
            width="30rem"
            src={`https://flagsapi.com/${countryCode}/flat/64.png`}
          />
        )}
        <input value={country} disabled readOnly className="bg-yellow-100" />
        <label>Place</label>
        <input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="bg-yellow-100"
        />
        <label>Date</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-yellow-100"
        />
        <button>Add favourite place</button>
      </form>
    </>
  );
};

export default AddPlaceForm;
