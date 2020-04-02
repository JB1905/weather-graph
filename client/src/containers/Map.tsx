import React, { useState } from 'react';
import ReactMapboxGl, { Source } from 'react-mapbox-gl';

interface Props {
  lat: number;
  lon: number;
}

const Maps: React.FC<Props> = ({ lat, lon }) => {
  const [layer, setLayer] = useState('clouds_new');

  const RASTER_SOURCE_OPTIONS = {
    type: 'raster',
    tiles: [
      `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=874718354841f0e0250b4b06a05a971e`,
    ],
    tileSize: 256,
  };

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiamJpZXNpYWRhIiwiYSI6ImNrM2Rqd29kYzE1enkzY21yNmd1bWpyZjEifQ.hW3qkXhLpbvOdG5_-PYAVw',
  });

  return (
    <Map
      style="mapbox://styles/mapbox/dark-v9"
      center={[lon, lat]}
      containerStyle={{
        height: '300px',
        width: '100%',
      }}
    >
      <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
    </Map>
  );
};

export default Maps;
