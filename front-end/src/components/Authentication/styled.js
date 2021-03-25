import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

import THEME_VARIANT from '../../constants/themeVariant';

export const FormWrapper = styled.section`
  display: flex;
  margin: auto;
  padding: 20px;

  div {
    margin: 0 auto;
  }
`;

export const FormContent = styled.div(
  ({ themeVariant, isErrorAnimation }) => css`
    padding: 30px 60px;
    background-color: ${get(['theme', 'login', 'background', themeVariant])};
    box-shadow: 0px 0px 20px ${get(['theme', 'login', 'shadow', 'main', themeVariant])};

    animation-name: ${isErrorAnimation && 'error'};
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-duration: 0.8s;
    animation-delay: 0.5s;

    button {
      display: block;
      margin: 15px auto 10px;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 0;
      border: 1px solid ${get(['theme', 'login', 'button', 'border', themeVariant])};
      background-color: ${get(['theme', 'login', 'button', 'background', themeVariant])}10;
      color: ${get(['theme', 'login', 'button', 'color', themeVariant])};

      &:active {
        border-radius: 0;
        box-shadow: 0px 0px 20px -5px ${get(['theme', 'login', 'button', 'shadow', themeVariant])};
      }
    }

    a {
      font-size: 15px;
      color: ${get(['theme', 'login', 'link', 'color', themeVariant])};
    }

    @keyframes error {
      50% {
        box-shadow: 0px 0px 20px ${get(['theme', 'login', 'shadow', 'error', themeVariant])};
      }
    }
  `,
);

const getBorderColor = ({ isError, themeVariant }) =>
  get(['theme', 'login', 'input', 'border', isError ? THEME_VARIANT.warning : themeVariant]);

export const InputFieldContent = styled.div(
  ({ themeVariant }) => css`
    label {
      display: block;
      margin: 20px 15px 10px;
      font-size: 16px;
      color: ${get(['theme', 'login', 'label', 'color', themeVariant])};
    }

    input {
      padding: 0.5rem 1rem;
      border: 1px solid ${getBorderColor};
      margin-bottom: 10px;
    }

    span {
      position: absolute;
    }
  `,
);
