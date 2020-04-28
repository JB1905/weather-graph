import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
// import ReactMapboxGl, { Source, Layer } from 'react-mapbox-gl';
import styled from 'styled-components';

interface Props {
  lat: number;
  lon: number;
}

const MapWrapper = styled.section`
  flex: 1;
`;

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
      `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_WEATHER_CLIENT_ID}`,
    ],
    tileSize: 256,
  };

  // const Map = ReactMapboxGl({
  //   accessToken:
  //     'pk.eyJ1IjoiamJpZXNpYWRhIiwiYSI6ImNrM2Rqd29kYzE1enkzY21yNmd1bWpyZjEifQ.hW3qkXhLpbvOdG5_-PYAVw',
  // });

  return (
    <MapWrapper>
      <h3>Maps</h3>

      <ButtonsWrapper>
        {LAYERS.map((layer) => (
          <Button onClick={() => setLayer(layer)} key={layer}>
            {layer}
          </Button>
        ))}
      </ButtonsWrapper>

      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        width="100%"
        height="300px"
        latitude={lat}
        longitude={lon}
        // zoom={zoomLevel}
      >
        {/* <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
        <Layer type="raster" id="layer_id" sourceId="source_id" /> */}
      </ReactMapGL>

      {/* <Map
        style="mapbox://styles/mapbox/dark-v9"
        center={[lon, lat]}
        containerStyle={{
          height: '300px',
          width: '100%',
        }}
      >
        <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
        <Layer type="raster" id="layer_id" sourceId="source_id" />
      </Map> */}
    </MapWrapper>
  );
};

export default Maps;
