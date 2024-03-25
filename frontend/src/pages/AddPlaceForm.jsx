import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace } from '../slices/placesSlice';
import { clearCurrent } from '../slices/currentSlice';
import { useNavigate } from 'react-router-dom';
import FlagImg from '../components/FlagImg';
import FormRowDiv from '../components/FormRowDiv';
import Form from '../components/Form';
import ButtonPrimary from '../components/ButtonPrimary';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const AddPlaceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const current = useSelector((state) => state.current);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [continent, setContinent] = useState('');
  const [region, setRegion] = useState('');
  const [regionOnly, setRegionOnly] = useState(false);

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
          const {
            city,
            countryCode,
            countryName,
            continent,
            principalSubdivision,
          } = await res.json();
          setCity(city);
          setCountry(countryName);
          setContinent(continent);
          setCountryCode(countryCode);
          setRegion(principalSubdivision);
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
    const cityToSave = regionOnly ? '' : city;
    const tripId = `${new Date().toISOString()}${date.toISOString()}`;
    console.log(tripId);
    dispatch(
      addPlace({
        coords: { lat: latitude, lng: longitude },
        city: cityToSave,
        region,
        country,
        countryCode,
        date: date.toISOString(), // Convert Date to ISO string
        description,
        continent,
        tripId,
      }),
    );
    setLatitude('');
    setLongitude('');
    setCity('');
    setCountry('');
    setCountryCode('');
    setDate(new Date());
    setDescription('');
    setRegionOnly(false);
    dispatch(clearCurrent());
    navigate('/places');
  }

  return (
    <>
      {current ? (
        countryCode ? (
          <>
            <h2 className="text-center text-2xl font-bold">
              Add your <span className="text-limeMain">trip</span>
            </h2>
            <Form onSubmit={addTripHandler}>
              <FormRowDiv>
                <label>Latitude</label>
                <input
                  value={latitude}
                  disabled
                  readOnly
                  className="rounded bg-greyLight px-3 py-2"
                />
              </FormRowDiv>
              <FormRowDiv>
                <label>Longitude</label>
                <input
                  value={longitude}
                  disabled
                  readOnly
                  className="rounded bg-greyLight px-3 py-2"
                />
              </FormRowDiv>
              <FormRowDiv>
                <label>Country</label>
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <FlagImg code={countryCode} />
                  </div>
                  <input
                    value={country}
                    disabled
                    readOnly
                    className=" grow rounded bg-greyLight px-3 py-2"
                  />
                </div>
              </FormRowDiv>
              <FormRowDiv>
                <label>City</label>
                <input
                  value={regionOnly ? '' : city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`${regionOnly ? 'bg-greyMedium' : 'bg-greyLight'} rounded  px-3 py-2`}
                  disabled={regionOnly}
                />
              </FormRowDiv>
              <div className="flex flex-col gap-1">
                <label>Region</label>
                <input
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="bg rounded bg-greyLight px-3 py-2"
                />
              </div>
              <div className="flex gap-3">
                <label>Add region only</label>
                <input
                  type="checkbox"
                  value={regionOnly}
                  onChange={(e) => setRegionOnly(e.target.checked)}
                  className="w-4 accent-limeMain"
                />
              </div>
              <FormRowDiv>
                <label>Date</label>
                <DatePicker
                  id="date"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="bg rounded bg-greyLight px-3 py-2"
                />
              </FormRowDiv>
              <FormRowDiv>
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded bg-greyLight px-3 py-2"
                />
              </FormRowDiv>
              <ButtonPrimary>Add favourite place</ButtonPrimary>
            </Form>
          </>
        ) : (
          <h2 className="	 text-center text-2xl font-bold">
            Selected place is not a country 🗺️{' '}
          </h2>
        )
      ) : (
        <h2 className="text-center text-2xl font-bold">
          Tap on map to add your <span className="text-limeMain">trip</span>
        </h2>
      )}
    </>
  );
};

export default AddPlaceForm;
