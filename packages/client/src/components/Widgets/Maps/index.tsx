import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import { ButtonsWrapper, Button } from './Maps.styles';

// import { LAYERS, RASTER_SOURCE_OPTIONS } from '../../constants/mapOptions';

import Section from 'components/Section';

interface Props {
  readonly lat: number;
  readonly lon: number;
}

const Maps = ({ lat, lon }: Props) => {
  // const [layer, setLayer] = useState('clouds_new');

  return (
    <Section title="Maps">
      {/* <ButtonsWrapper>
        {LAYERS.map((layer) => (
          <Button onClick={() => setLayer(layer)} key={layer}>
            {layer}
          </Button>
        ))}
      </ButtonsWrapper> */}

      {/* <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        width="100%"
        height="300px"
        latitude={lat}
        longitude={lon}
        // zoom={zoomLevel}
      > */}
      {/* <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
        <Layer type="raster" id="layer_id" sourceId="source_id" /> */}
      {/* </ReactMapGL> */}
    </Section>
  );
};

export default Maps;
