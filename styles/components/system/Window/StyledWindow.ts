import styled from 'styled-components';

type StyledWindowProps = {
  minimized?: boolean;
};

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window};
  box-shadow: 0 0 20px rgba(0, 0, 0, 50%);
  display: ${({ minimized = false }) => (minimized ? 'none' : 'block')};
  height: 100%;
  outline: 1px solid rgba(0, 0, 0, 25%);
`;

export default StyledWindow;
