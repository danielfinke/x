import styled from 'styled-components';
import Button from 'styles/common/Button';

const StyledStartButton = styled(Button)`
  align-items: center;
  display: flex;
  fill: ${({ theme }) => theme.colors.startButton};
  flex-shrink: 0;
  justify-content: center;
  width: ${({ theme }) => theme.sizes.startButton.width};

  svg {
    height: ${({ theme }) => theme.sizes.startButton.iconSize};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    svg {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
