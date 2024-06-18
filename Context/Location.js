import * as Location from "expo-location";
import React, { useContext, useEffect, useState } from "react";

// Create a context with default value
const LocationContext = React.createContext();

// Custom hook to consume the  context
export const useLocation = () => useContext(LocationContext);

// Theme provider component
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        lat: location?.coords?.latitude,
        long: location?.coords?.longitude,
      });
    })();
  }, []);

  return (
    <LocationContext.Provider value={{ location }}>
      {children}
    </LocationContext.Provider>
  );
};
