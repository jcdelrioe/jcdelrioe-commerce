import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const googleApi = process.env.REACT_APP_GOOGLE_MAPS_KEY

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey={googleApi}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
