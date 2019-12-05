import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faCompress,
  faTint,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

import Title from '../components/shared/Title';
import Section from '../components/city/Section';
// import Time from "../components/city/Time";
import Temperature from '../components/shared/Temperature';
import UnitSwitch from '../components/shared/UnitSwitch';

import { toUnit } from '../helpers';

const Wrapper = styled.div`
  @media (min-width: 680px) {
    transform: scale(1.1);
  }
`;

const Inline = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Item = styled.p`
  margin: 0 10px;

  svg {
    min-width: 20px;
    margin-left: 8px;
  }
`;

const Z = styled.div`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`;

const Details = ({ data }: any) => {
  const { name, weather, main, /* visibility,*/ wind, sys, id } = data;

  const dispatch = useDispatch();

  const unit = useSelector((state: any) => state.settings.unit);

  // const date = new Intl.DateTimeFormat("en-us", {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric"
  // });

  const time = new Intl.DateTimeFormat('en-us', {
    hour: 'numeric',
    minute: 'numeric'
  });

  // const add = () => {
  //   dispatch({
  //     type: "ADD_FAVORITE",
  //     payload: id
  //   });
  // };

  useEffect(() => {
    dispatch({
      type: 'SET_BACKGROUND_COLOR',
      payload: weather[0].description,
      isNight: Date.now() < sys.sunrise * 1000 || Date.now() > sys.sunset * 1000
    });
  }, [dispatch, sys.sunrise, sys.sunset, weather, id]);

  return (
    <Wrapper>
      {/* <button onClick={add}>Favorite</button> */}
      {/* <Section><Time>{date.format(Date.now())}</Time></Section> */}

      <Section>
        <Title>{name}</Title>

        <Inline>
          <Temperature>{toUnit(main.temp, unit)}</Temperature>

          <UnitSwitch />
        </Inline>

        <span>{weather[0].description}</span>

        <Z>
          <Item>
            Pressure: {main.pressure}
            <FontAwesomeIcon icon={faCompress} />
          </Item>

          <Item>
            Wind: {wind.speed} km/h
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{ transform: `rotate(${wind.deg}deg)` }}
            />
          </Item>

          {/* <Item>
            Visibility: {visibility} mi
            <FontAwesomeIcon
            icon={faArrowUp}
            style={{ transform: `rotate(${wind.deg}deg)` }}
          />
          </Item> */}

          <Item>
            Humidity: {main.humidity}
            <FontAwesomeIcon icon={faTint} />
          </Item>

          <Inline>
            <Item>
              {time.format(sys.sunrise * 1000)}
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </Item>

            <Item>
              {time.format(sys.sunset * 1000)}
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </Item>
          </Inline>
        </Z>
      </Section>
    </Wrapper>
  );
};

export default Details;
