import type { FC } from 'react';

import styled from 'styled-components';

type StyledTaskbarEntryProps = {
  foreground: boolean;
};

const StyledTaskbarEntryListItem = styled.li<StyledTaskbarEntryProps>`
  background-color: ${({ foreground, theme }) =>
    foreground ? theme.colors.taskbar.active : ''};
  border-bottom: ${({ theme }) => `
    ${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}
  `};
  flex-grow: 1;
  margin: ${({ foreground }) => (foreground ? '' : '0 4px')};
  max-width: ${({ foreground, theme }) =>
    foreground
      ? theme.sizes.taskbar.entry.maxWidth
      : `calc(${theme.sizes.taskbar.entry.maxWidth} - 8px)`};

  /* Allow shrinking past min-content */
  min-width: 0;
  padding: ${({ foreground }) => (foreground ? '0 4px' : '')};

  &:hover {
    background-color: ${({ foreground, theme }) =>
      foreground
        ? theme.colors.taskbar.activeHover
        : theme.colors.taskbar.hover};
    margin: 0;
    max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
    padding: 0 4px;
  }
`;

const StyledTaskbarEntry: FC<StyledTaskbarEntryProps> = ({
  children,
  foreground
}) => (
  <StyledTaskbarEntryListItem foreground={foreground}>
    {children}
  </StyledTaskbarEntryListItem>
);

export default StyledTaskbarEntry;
