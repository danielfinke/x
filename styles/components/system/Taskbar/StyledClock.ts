import styled from 'styled-components';

const StyledClock = styled.time`
  align-items: center;
  background-color: #00f;
  color: #fff;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-left: auto;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
