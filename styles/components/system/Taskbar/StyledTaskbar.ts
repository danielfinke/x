import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  /* purple */
  background-color: #800080;
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  position: absolute;
  width: 100%;
`;

export default StyledTaskbar;
