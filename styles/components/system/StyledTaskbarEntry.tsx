import type { FC } from 'react';

import styled from 'styled-components';

const StyledTaskbarEntryButton = styled.button`
  background-color: #add8e6; /* lightblue */
  border: 2px solid #fff;
  border-radius: 5px;
  height: 100%;
  padding: 0 10px;
`;

const StyledTaskbarEntry: FC = ({ children }) => (
  <li>
    <StyledTaskbarEntryButton>{children}</StyledTaskbarEntryButton>
  </li>
);

export default StyledTaskbarEntry;
