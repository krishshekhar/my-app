import React, { useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  TrafficLayer,
} from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 40.712776, // Example latitude (New York City)
  lng: -74.005974, // Example longitude
};

const options = {
  styles: [], // Add custom map styles if desired
};

const TrafficMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Make sure to set your API key
  });

  const onLoad = useCallback(function callback(map) {
    // You can customize the map here
  }, []);

  const onUnmount = useCallback(function callback(map) {
    // Clean up when component unmounts
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12} // Adjust zoom level
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {/* Add traffic layer */}
      <TrafficLayer />
    </GoogleMap>
  );
};

export default TrafficMap;
