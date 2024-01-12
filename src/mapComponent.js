import React from 'react';
import './mapComponent.css'; 

const MapComponent = () => {
  return (
    <iframe
      title="Waze Map"
      width="100%"
      height="600"
      frameBorder="0"
      scrolling="no"
      src="https://embed.waze.com/iframe?zoom=12&lat=36.8065&lon=10.1815"
      allowFullScreen
    ></iframe>
  );
};

export default MapComponent;