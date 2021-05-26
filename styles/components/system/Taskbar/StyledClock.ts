import styled from 'styled-components';

const StyledClock = styled.time`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
