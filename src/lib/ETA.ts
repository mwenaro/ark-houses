import {
  Client,
  ClientOptions,
  TravelMode,
} from "@googlemaps/google-maps-services-js";
export type Coord = { lat: number; lng: number };
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
export const convertEtaToHours = (etaString: string) => {
  // Split the string into parts
  const parts = etaString.split(" ");

  // Initialize variables for hours and minutes
  let hours = 0;
  let minutes = 0;

  // Iterate through parts and update hours and minutes
  for (let i = 0; i < parts.length; i += 2) {
    const value = parseInt(parts[i], 10);

    if (parts[i + 1] === "hours") {
      hours += value;
    } else if (parts[i + 1] === "mins") {
      minutes += value;
    }
  }

  // Convert total time to hours
  const totalHours = hours + minutes / 60;

  return totalHours;
};

export const getGeocode = async (address: string) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`
    );
    const data = await response.json();

    if (data.results.length > 0) {
      const coordinates = data.results[0].geometry.location;
      return { lat: +coordinates.lat, lng: +coordinates.lng };
    } else {
      throw new Error("No location found");
      // return data
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getDistance = async (origin: string, destination: string) => {
  const client = new Client();
  const originCoord = await getGeocode(origin),
    destCoord = await getGeocode(destination);

  try {
    const response = await client.distancematrix({
      params: {
        origins: [Object.values(originCoord).join(",")],
        destinations: [Object.values(destCoord).join(",")],

        // origins: ["-4.043740,39.658871"],
        // destinations: ["-1.2920659,36.82194619999996"],
        mode: "driving" as TravelMode, // Change as needed
      } as any,
    });

    // const distance = response.data.rows[0].elements[0].distance.value;

    const distance = response.data;
    return {
      status: "success",
      data: { distance },
    };
  } catch (error: any) {
    // return {
    //   status: 'error',
    //   error: error.message,
    // };
    throw new Error(error.message);
  }
};

export  const getDistanceUsingCoords = async(
  originCoord: Coord,
  destCoord: Coord
) => {
  let res = { distanceInKm: 0, success: false, durationInHrs: 0, error: null };
  // Initialize Google Maps client
  const client = new Client();

  try {
    const response = await client.distancematrix({
      params: {
        origins: [Object.values(originCoord).join(",")],
        destinations: [Object.values(destCoord).join(",")],

        // origins: ["-4.043740,39.658871"],
        // destinations: ["-1.2920659,36.82194619999996"],
        mode: "transist" as TravelMode, // Change as needed
        key: GOOGLE_API_KEY as string,
      } as any,
    });

    const { distance, duration } = response.data.rows[0].elements[0];
    const distanceInKm = +distance.value / 1000;
    const durationInHrs = +duration.value / 3600;
    res = { ...res, success: true, distanceInKm, durationInHrs };
    return {
      success: true,
      distanceInKm,
      durationInHrs,
    };
  } catch (error: any) {
    // Handle API error
    if (error.response) {
      res = {
        ...res,
        success: false,
        error: error.response.data.error_message,
      };
      return res;
    }

    // Handle other/network errors
    res = { ...res, success: false, error: error.message };
    return res;
  }
};

export const getEvelevation = async (coordinates: {
  lat: number;
  lng: number;
}) => {
  const client = new Client({});
  try {
    const r = await client.elevation({
      params: {
        // locations: [{ lat: 45, lng: -110 }],
        locations: [coordinates],
        key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API!,
      },
      timeout: 1000, // milliseconds
    });

    console.log(r.data.results[0].elevation);
    return { data: r.data.results[0].elevation };
  } catch (e: any) {
    throw new Error(e.message);
  }
};


// // Haversine formula to calculate distance between two coordinates
// interface Coordinates {
//   lat: number;
//   lon: number;
// }

export function calculateDistance(coord1: Coord, coord2: Coord): number {
  const R = 6371; // Earth's radius in kilometers

  const toRadians = (angle: number): number => (angle * Math.PI) / 180;

  const lat1 = toRadians(coord1.lat);
  const lon1 = toRadians(coord1.lng);
  const lat2 = toRadians(coord2.lat);
  const lon2 = toRadians(coord2.lng);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  return +distance.toFixed(2);
}
