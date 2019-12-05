import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Temperature from '../shared/Temperature';

import { toUnit } from '../../helpers';

const Wrapper = styled(Link)`
  color: #fff;
  margin: 15px;
  border-bottom: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
  border-radius: 2px;
  padding: 20px 30px;
  width: calc(100% - 30px);
  max-width: 360px;

  @media (min-width: 620px) {
    width: calc(50% - 30px);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
`;

const Favorite = ({ data }: any) => {
  const unit = useSelector((state: any) => state.settings.unit);

  return (
    <Wrapper to={`/city/${data.name.toLowerCase()}`}>
      <Info>
        <div>
          <p>{data.name}</p>

          <Temperature>{toUnit(data.main.temp, unit)}</Temperature>
        </div>

        <Grid>
          <div>
            <p>{data.main.temp_min}</p>
            <p>{data.main.temp_max}</p>
          </div>

          <div>
            <p>{data.wind.speed}</p>
            <p>{data.main.humidity}</p>
          </div>
        </Grid>
      </Info>

      <p>{data.weather[0].description}</p>
    </Wrapper>
  );
};

export default Favorite;
