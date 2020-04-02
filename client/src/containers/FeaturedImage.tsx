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
`;

const FeaturedImage: React.FC<Props> = ({ cityName }) => {
  const { data } = useQuery<any>(CITY_IMAGE, {
    variables: {
      name: cityName.toLowerCase(),
    },
  });

  // console.log(data);

  return data ? (
    <Image src={data.cityByName.photos[0].image.web} alt={cityName} />
  ) : null;
};

export default FeaturedImage;
