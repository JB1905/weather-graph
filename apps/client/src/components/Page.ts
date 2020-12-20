import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spaces.content};
`;

export default Page;
