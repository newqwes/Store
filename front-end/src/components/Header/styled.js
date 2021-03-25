import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

const HeaderWrapper = styled.header(
  ({ themeVariant }) => css`
    position: sticky;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    top: -20px;
    width: 100%;
    min-height: 100px;
    background: ${get(['theme', 'background', 'color', themeVariant])};

    svg {
      margin: 0 20px;
    }

    span,
    button {
      opacity: 0.8;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  `,
);

export default HeaderWrapper;
