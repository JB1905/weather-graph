import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  position: absolute;
  top: 0;
  opacity: 0.2;
  z-index: -1;
`;

const Image = ({ src }: { src: string }) => <Img src={src} />;

export default Image;
