import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({
  title: 'Start',
  type: 'button'
})`
  align-items: center;
  color: #fff;
  display: flex;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};
  justify-content: center;
  width: ${({ theme }) => theme.sizes.startButton.width};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
