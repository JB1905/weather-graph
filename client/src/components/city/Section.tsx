import styled from 'styled-components';

const Section = styled.div<{ full?: boolean }>`
  ${({ full }) => `
    display: flex;
    align-items: ${full ? 'flex-end' : 'center'};
    flex-direction: column;
    margin: 14px 0;
    
    ${full &&
      `
        padding: 2% 14%;
        text-align: right;
      `};
  `}

  p {
    line-height: 2;
  }
`;

export default Section;
