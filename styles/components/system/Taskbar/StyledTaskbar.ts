import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  backdrop-filter: blur(${({ theme }) => theme.sizes.taskbar.blur});
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  position: absolute;
  width: 100%;
`;

export default StyledTaskbar;
