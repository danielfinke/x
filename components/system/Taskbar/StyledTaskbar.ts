import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  backdrop-filter: blur(${({ theme }) => theme.sizes.taskbar.blur});
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  display: flex;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100%;
`;

export default StyledTaskbar;
