import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { CITY_IMAGE } from '../api/query';

interface Props {
  cityName: string;
}

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50px;
  font-size: 0;
`;

// const Image = styled.img`
//   position: absolute;
//   width: 100vw;
//   height: 240px;
//   object-fit: cover;
//   top: 0;
//   z-index: 0;
//   font-size: 0;
// `;

const FeaturedImage: React.FC<Props> = ({ cityName }) => {
  const { data } = useQuery<any>(CITY_IMAGE, {
    variables: {
      name: cityName,
    },
  });

  return data ? (
    <Image src={data.cityByName.photos[0].image.web} alt={cityName} />
  ) : null;
};

export default FeaturedImage;
