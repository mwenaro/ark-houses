"use client"
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
      <GoogleMap
        mapContainerStyle={{ width: '100vw', height: '400px' }}
        zoom={15}
        center={currentLocation}
      >
        {currentLocation.lat && currentLocation.lng && (
          <Marker position={currentLocation}  label={{text:"Me"}}/>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
