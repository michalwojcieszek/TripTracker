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

const Map = () => {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 20]);
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    } else {
      getPosition();
    }
  }, [geolocationPosition]);

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

  return (
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
              <h3 className="font-semibold">{place.place}</h3>
              <div className="flex items-center gap-3">
                <img
                  alt="Country flag"
                  width="30rem"
                  src={`https://flagsapi.com/${place.countryCode}/flat/64.png`}
                />{' '}
                {place.country}
              </div>
            </Popup>
          </Marker>
        ))}

      <ChangeCenter position={mapPosition} />

      <DetectClick />
    </MapContainer>
  );
};

export default Map;
