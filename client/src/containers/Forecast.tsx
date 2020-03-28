import React, { useState } from 'react';
// import {Component} from 'react-d3-library';
// import d3 from "d3";

import styled from 'styled-components';

const ScrollList = styled.div`
  display: flex;
  max-width: 650px;
  overflow-x: auto;
`;

const Item = styled.div`
  padding: 10px;
`;

const Forecast = ({ data }: any) => {
  // console.log(data.list);

  const [chart, setChart] = useState('wind');

  // const node = document.createElement("div");

  // d3.select(node)
  //   .append("svg")
  //   .attr("width", 300)
  //   .attr("height", 300);

  return (
    <div>
      <button onClick={() => setChart('temperature')}>Temperature</button>
      <button onClick={() => setChart('rain')}>Rain</button>
      <button onClick={() => setChart('wind')}>Wind</button>

      <ScrollList>
        {chart === 'wind'
          ? data.list.map((item: any) => (
              <Item>
                <p>{item.wind.speed}</p>
              </Item>
            ))
          : null}
      </ScrollList>
    </div>
  );
};

export default Forecast;
