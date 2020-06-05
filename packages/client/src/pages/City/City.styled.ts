import styled, { css } from 'styled-components';

import Wrapper from 'components/Wrapper';

const flexbox = css``;

export const PageWrapper = styled.div`
  height: 100%;
  max-height: 100%;
  max-width: 650px;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const ActionButtonsWrapper = styled(Wrapper)``;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 100%;
  flex: 1;
`;

export const More = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;

  section {
    margin: 20px;
  }
`;
