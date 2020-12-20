import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContentWrapper = styled.div`
  height: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
  margin: ${({ theme }) => theme.spaces.content} 0 0;
`;
