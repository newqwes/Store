import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

const ButtonWrapper = styled.button(
  ({ themeVariant }) => css`
    padding: 5px 8px;
    letter-spacing: 1px;
    background-color: ${get(['theme', 'button', 'background', themeVariant])};
    border: 1px solid ${get(['theme', 'button', 'border', themeVariant])};
    border-radius: 5px;

    color: ${get(['theme', 'button', 'color', themeVariant])};
    font-weight: 500;
    outline: none;
    font-size: 12px;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }
  `,
);

export default ButtonWrapper;
