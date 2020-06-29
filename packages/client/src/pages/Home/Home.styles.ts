import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const mixin = css`
//   display: inline-block;
//   margin: 10px 0;
// `;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 300px;
  margin: 0 auto 25px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 10rem;
  margin: 0 auto 20px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
`;
