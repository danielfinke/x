import type { FC } from 'react';

import styled from 'styled-components';

const StyledTaskbarEntryListItem = styled.li`
  border-bottom: ${({ theme }) => `
    ${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}
  `};
  flex-grow: 1;
  margin: 0 4px;
  max-width: ${({ theme }) =>
    `calc(${theme.sizes.taskbar.entry.maxWidth} - 8px)`};

  /* Allow shrinking past min-content */
  min-width: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
    margin: 0;
    max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
    padding: 0 4px;
  }
`;

const StyledTaskbarEntry: FC = ({ children }) => (
  <StyledTaskbarEntryListItem>{children}</StyledTaskbarEntryListItem>
);

export default StyledTaskbarEntry;
