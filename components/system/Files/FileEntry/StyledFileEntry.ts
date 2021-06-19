import styled from 'styled-components';

const StyledFileEntry = styled.li`
  display: flex;
  justify-content: center;
  padding: 2px;

  :hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    ::before {
      border: ${({ theme }) => `1px solid ${theme.colors.fileEntry.border}`};
      bottom: -1px;
      content: '';
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    position: relative;

    figure {
      align-items: center;
      display: flex;
      flex-direction: column;

      figcaption {
        color: ${({ theme }) => theme.colors.fileEntry.text};
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        letter-spacing: ${({ theme }) => theme.sizes.fileEntry.letterSpacing};
        margin: 2px 0;
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
      }

      img {
        width: ${({ theme }) => theme.sizes.fileEntry.iconSize};
      }
    }
  }
`;

export default StyledFileEntry;