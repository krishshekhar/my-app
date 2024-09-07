import React from 'react';
import TrafficMap from '../../components/TrafficMap';
import MapComponent from '../../components/MapComponent';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page.</p>
      <TrafficMap />
      <MapComponent />
    </div>
  );
};

export default Home;
