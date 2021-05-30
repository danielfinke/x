import type { FC } from 'react';

import styled from 'styled-components';

const StyledTaskbarEntryListItem = styled.li`
  flex-grow: 1;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};

  /* Allow shrinking past min-content */
  min-width: 0;
`;

const StyledTaskbarEntry: FC = ({ children }) => (
  <StyledTaskbarEntryListItem>{children}</StyledTaskbarEntryListItem>
);

export default StyledTaskbarEntry;
