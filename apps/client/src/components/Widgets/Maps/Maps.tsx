import { memo, useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import Widget from 'components/Widget';

type MapsProps = {
  readonly lat: number;
  readonly lon: number;
};

const LayerSelection = ({ items, selected, onSelect }: any) => {
  return <div></div>;
};

const Maps = memo<MapsProps>(({ lat, lon }) => {
  const [layer, setLayer] = useState('clouds_new');

  return (
    <Widget title="Maps">
      {/* <LayerSelection items={[]} selected={layer} onSelect={() => setLayer()} /> */}

      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        width="100%"
        height="300px"
        latitude={lat}
        longitude={lon}
        // zoom={zoomLevel}
      >
        {/* <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} /> */}
        {/* <Layer type="raster" id="layer_id" sourceId="source_id" /> */}
      </ReactMapGL>
    </Widget>
  );
});

export default Maps;
