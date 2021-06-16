import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  column-gap: 1px;
  display: flex;
  margin: 0 3px;

  /* Allow shrinking past min-content */
  min-width: 0;
  width: 100%;
`;

export default StyledTaskbarEntries;
