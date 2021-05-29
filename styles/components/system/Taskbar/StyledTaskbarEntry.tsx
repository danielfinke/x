import type { FC } from 'react';

import styled from 'styled-components';

const StyledTaskbarEntryListItem = styled.li`
  flex-grow: 1;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};

  /* Allow shrinking past min-content */
  min-width: 0;
`;

const StyledTaskbarEntryButton = styled.button`
  border-bottom: ${({ theme }) => `
    ${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}
  `};
  height: 100%;
  padding: 0 5px;
  text-align: start;

  /* Force shrink down to width of parent */
  width: 100%;

  figure {
    align-items: center;
    display: flex;
    font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};

    figcaption {
      color: ${({ theme }) => theme.colors.taskbar.entry.text};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin-right: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
  }
`;

const StyledTaskbarEntry: FC = ({ children }) => (
  <StyledTaskbarEntryListItem>
    <StyledTaskbarEntryButton type="button">
      {children}
    </StyledTaskbarEntryButton>
  </StyledTaskbarEntryListItem>
);

export default StyledTaskbarEntry;
