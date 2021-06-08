import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  display: flex;
  gap: 5px;

  /* Allow shrinking past min-content */
  min-width: 0;
  padding: 0 5px;
  width: 100%;
`;

export default StyledTaskbarEntries;
