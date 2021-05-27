import type { FC } from 'react';

import styled from 'styled-components';

const StyledTaskbarEntryListItem = styled.li`
  flex-grow: 1;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};

  /* Allow shrinking past min-content */
  min-width: 0;
`;

const StyledTaskbarEntryButton = styled.button`
  background-color: #add8e6; /* lightblue */
  border: 2px solid #fff;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  padding: 0 5px;
  text-align: start;
  text-overflow: ellipsis;

  /* Force shrink down to width of parent */
  width: 100%;
`;

const StyledTaskbarEntry: FC = ({ children }) => (
  <StyledTaskbarEntryListItem>
    <StyledTaskbarEntryButton type="button">
      {children}
    </StyledTaskbarEntryButton>
  </StyledTaskbarEntryListItem>
);

export default StyledTaskbarEntry;
