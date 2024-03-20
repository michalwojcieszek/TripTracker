import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Place = () => {
  const { id } = useParams();
  const places = useSelector((state) => state.places);
  const place = places.find((place) => place.tripId === id);

  return <div>{place.city}</div>;
};

export default Place;
