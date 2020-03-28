import styled from 'styled-components';

const Section = styled.div<{ full?: boolean }>`
  ${({ full }) => `
    display: flex;
    align-items: ${full ? 'flex-end' : 'center'};
    flex-direction: column;
    margin: 14px;
    min-width: 300px;
    
    ${
      full &&
      `
        padding: 2% 12%;
        text-align: right;
      `
    };
  `}

  p {
    line-height: 2;
  }
`;

export default Section;
