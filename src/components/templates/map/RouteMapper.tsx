"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";


interface MapProps {
  apiKey?: string;
  routePoints?: { lat: number; lng: number, title?:string }[];
}

const RouteMapper: React.FC<MapProps> = ({
  routePoints = [
    { lat: -3.8666632, lng: 39.4666648 },
    { lat: -3.386925, lng: 36.682995 },
    { lat: -0.0788, lng: 34.9842 },
  ],
}) => {
  const [directions, setDirections] = useState<any>(null);
  const [zoom, setZoom] = useState<number>(12);

  const mapContainerStyle: any = {
    minHeight: "60vh",
    width: "100%",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const onLoad:any = (map: google.maps.Map) => {
    // Perform additional actions when the map is loaded
    centerMapOnUserLocation();
    setZoom(map.getZoom() ?? 12);

    // Update zoom state on zoom change
    map.addListener("zoom_changed", () => {
      setZoom(map?.getZoom() ?? 12);
    });
  };

  const centerMapOnUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          calculateDirections(
            routePoints[routePoints.length - 1] ?? userLocation
          );
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  const calculateDirections = (destination: { lat: number; lng: number }) => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: routePoints[0],
        destination,
        waypoints: routePoints
          .map((p) => {
            return { location: { lat: +p.lat, lng: p.lng } };
          })
          .slice(1, -1),
        travelMode: google.maps.TravelMode.DRIVING,
        // travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error("Error calculating directions:", status);
        }
      }
    );
  };

  const markerSize = () => {
    // Define the base marker size
    const baseSize = 20;

    // Adjust marker size based on the zoom level
    return baseSize * Math.pow(2, zoom - 12);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={routePoints[0]} // Set initial center to the first route point
        zoom={12}
        options={options}
        onLoad={onLoad}
      >
        {directions && <DirectionsRenderer directions={directions} 
        options={{
          polylineOptions: {
            strokeColor: "#00FF00",
            strokeOpacity: 3,
            strokeWeight: 3,
          },
        }}
        
        />}

        {/* Marker for the user's location */}
        {routePoints.map((point, index) => (
          <Marker key={index} position={point} 
          label={point?.title ??""}
          />
        ))}

        {/* <Marker
          position={routePoints[0]}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            // scaledSize: new google.maps.Size(markerSize(), markerSize()),
          }}
        /> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default RouteMapper;
