import styled from 'styled-components';
import Button from 'styles/common/Button';

const StyledTaskbarEntryButton = styled(Button)`
  height: 100%;

  /* Force shrink down to width of parent */
  width: 100%;

  figure {
    align-items: center;
    display: flex;

    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
  }
`;

export default StyledTaskbarEntryButton;
