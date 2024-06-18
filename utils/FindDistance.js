import { getDistance } from "geolib";

export function calculateDistance(lat1, lon1, lat2, lon2) {
  const distance = getDistance(
    { latitude: lat1, longitude: lon1 },
    { latitude: lat2, longitude: lon2 }
  );
  return distance;
}

export const isNearby = (lat1, lon1, lat2, lon2) => {
  const distance = calculateDistance(lat1, lon1, lat2, lon2);
  return distance <= 50;
};
