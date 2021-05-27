import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  /* orange */
  background-color: #ffa500;
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  position: absolute;
  width: 100%;
`;

export default StyledTaskbar;
