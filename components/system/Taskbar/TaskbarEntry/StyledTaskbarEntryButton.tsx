import styled from 'styled-components';
import Button from 'styles/common/Button';

const StyledTaskbarEntryButton = styled(Button)`
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
      color: ${({ theme }) => theme.colors.text};
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }
`;

export default StyledTaskbarEntryButton;
