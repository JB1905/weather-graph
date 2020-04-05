import React, { useState } from 'react';
import ReactMapboxGl, { Source } from 'react-mapbox-gl';
import styled from 'styled-components';

interface Props {
  lat: number;
  lon: number;
}

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Button = styled.button``;

const Maps: React.FC<Props> = ({ lat, lon }) => {
  const [layer, setLayer] = useState('clouds_new');

  const LAYERS = [
    'clouds_new',
    'precipitation_new',
    'pressure_new',
    'temp_new',
  ];

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
    <>
      <ButtonsWrapper>
        {LAYERS.map((layer) => (
          <Button onClick={() => setLayer(layer)} key={layer}>
            {layer}
          </Button>
        ))}
      </ButtonsWrapper>

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
    </>
  );
};

export default Maps;
