import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Source } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamJpZXNpYWRhIiwiYSI6ImNrM2Rqd29kYzE1enkzY21yNmd1bWpyZjEifQ.hW3qkXhLpbvOdG5_-PYAVw',
});

const Maps: React.FC = () => {
  const [layer, setLayer] = useState('clouds_new');

  const RASTER_SOURCE_OPTIONS = {
    type: 'raster',
    tiles: [
      `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=874718354841f0e0250b4b06a05a971e`,
    ],
    tileSize: 256,
  };

  return (
    <div style={{ height: 300, width: '100%' }}>
      <button onClick={() => setLayer('clouds_new')}>Clouds</button>

      <button onClick={() => setLayer('precipitation_new')}>
        Precipitation
      </button>

      <button onClick={() => setLayer('pressure_new')}>
        Sea level pressure
      </button>

      <button onClick={() => setLayer('temp_new')}>Temperature</button>

      <Map
        style="mapbox://styles/mapbox/light-v9"
        center={[20.6285677, 50.8660773]}
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
      >
        <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
        <Layer type="raster" id="layer_id" sourceId="source_id" />
      </Map>
    </div>
  );
};

export default Maps;
