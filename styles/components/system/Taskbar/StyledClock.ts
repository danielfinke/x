import styled from 'styled-components';

const StyledClock = styled.time`
  align-items: center;
  color: ${({ theme }) => theme.colors.clockText};
  display: flex;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.sizes.clock.fontSize};
  justify-content: center;
  margin-left: auto;
  width: ${({ theme }) => theme.sizes.clock.width};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }
`;

export default StyledClock;
