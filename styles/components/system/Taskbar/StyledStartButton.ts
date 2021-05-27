import styled from 'styled-components';

const StyledStartButton = styled.button.attrs({
  title: 'Start',
  type: 'button'
})`
  /* red */
  background-color: #f00;
  flex-shrink: 0;
  width: ${({ theme }) => theme.sizes.startButton.width};
`;

export default StyledStartButton;
