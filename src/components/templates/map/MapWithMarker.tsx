"use client";


import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { strCapitalize } from "@/utils";

export type TMarker = { title: string; marker: { lat: number, lng: number } };

const MyMap = ({
  width = '500px',
  height = '500px',
  zoomScale = 8,
  points = [],
  endPoint = ""
}: {
  width?: string | number;
  height?: string | number;
  zoomScale?: number;
  points?: TMarker[];
  endPoint?:string
}) => {
  console.log({points})
  const [markers, setMarkers] = useState<TMarker[]>([]);
  const [centerData, setCenterData] = useState<{
    success: boolean;
    coordinates: { lat: number; lng: number };
  } | null>(null);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const markersData: TMarker[] = [
      { marker: { lat: -3.8666632, lng: 39.4666648 }, title: "mariakani" }, //mariakani
      { marker: { lat: -3.39605, lng: 38.55609 }, title: "Voi" }, //voi
      { marker: { lat: -2.69009, lng: 38.16631 }, title: "Mtito Andei" }, //mtito
      { marker: { lat: -4.0431, lng: 39.6681 }, title: "Mombasa" }, // Mombasa
      { marker: { lat: -0.0788, lng: 34.9842 }, title: "Nairobi" }, // Nairobi
      //   { lat: 4.087, lng: 38.3224 }, // Kisumu
    ];
    setMarkers(markersData);

    (async () => {
      const data = await (
        await fetch("/api/map/geocode_from_address?address=Meru")
      ).json();
      console.log({ data });
      if (data.success) setCenterData(data);
    })();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
      <GoogleMap
        // mapContainerStyle={{ width, height }}
        mapContainerStyle={{ width: "100vw", minHeight: "400px", maxWidth:'1200px', margin:'auto' }}
        zoom={zoomScale}
        // makutano as the center
        center={{ lat: -0.758499, lng: 37.276083 }}
        // center={centerData?.coordinates ?? currentLocation}
      >
        {/* <Marker position={currentLocation} label={{ text: "Me" }} /> */}
        {(points.length>0 ? points : markers).map(({ marker, title }) => (
          <Marker
            key={marker.lat}
            position={marker}
            label={{ text: strCapitalize(title), color: "black", fontSize:`${zoomScale*0.2}em` }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
