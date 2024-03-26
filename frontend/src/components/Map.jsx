import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../slices/currentSlice';
import { useNavigate } from 'react-router-dom';
import { useGeolocation } from '../hooks/useGeolocation';
import FlagImg from './FlagImg';
import Spinner from './Spinner';

const Map = () => {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 20]);
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);
  const current = useSelector((state) => state.current);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (current) {
      setMapPosition([current.lat, current.lng]);
    } else {
      if (geolocationPosition) {
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      } else {
        getPosition();
      }
    }
  }, [geolocationPosition, current]);

  function DetectClick() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMapPosition([lat, lng]);
        dispatch(setCurrent({ lat, lng }));
        navigate('/add');
      },
    });
  }

  function ChangeCenter({ position }) {
    //provided by Leaflet
    const map = useMap();
    map.setView(position);
    return null;
  }

  return !isLoadingPosition ? (
    <MapContainer
      center={mapPosition}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.length > 0 &&
        places.map((place) => (
          <Marker
            title
            position={[place.coords.lat, place.coords.lng]}
            key={place.date}
          >
            <Popup>
              <h3 className="font-semibold">
                {place.city ? place.city : place.region}
              </h3>
              <div className="flex items-center gap-3">
                <FlagImg code={place.countryCode} />
                {place.country}
              </div>
            </Popup>
          </Marker>
        ))}

      <ChangeCenter position={mapPosition} />
      <DetectClick />
    </MapContainer>
  ) : (
    <Spinner />
  );
};

export default Map;
