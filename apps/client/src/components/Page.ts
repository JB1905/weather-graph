import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  max-height: 100%;
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  flex-direction: column;
  align-items: center;
`;

export default Page;
