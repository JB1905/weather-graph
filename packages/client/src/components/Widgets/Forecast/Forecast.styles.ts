import styled from 'styled-components';

export const ForecastWrapper = styled.section`
  flex: 1;
`;

export const ForecastList = styled.ul`
  display: flex;
  overflow: auto;
  /* padding: 0 10px 20px; */
  margin-bottom: 0px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #fff3; */
  border: 3px solid #fff;
  /* background-color: #fff; */
  border-radius: 40px;
  height: 140px;
  min-width: 50px;
  /* margin: 10px; */
  color: #fff;
  font-size: 1rem;
`;

// const ItemIcon = styled(FontAwesomeIcon)``
