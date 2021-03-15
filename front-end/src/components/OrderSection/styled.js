import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';

export const OrderSectionWrapper = styled.section`
  padding: 30px 0;
`;

export const OrderSectionContent = styled.div(
  ({ themeVariant }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 auto;
    max-width: ${SECTION_WIDTH.midle}px;

    form {
      background-color: white;
      width: 85%;
      margin-top: 20px;
      padding: 30px;
      border-radius: 10px;
      align-self: flex-start;
      box-shadow: 0 0 10px -8px ${get(['theme', 'order', 'hoverShadow', themeVariant])};

      button {
        width: 100%;
        height: 40px;
        margin-top: 10px;
        color: ${get(['theme', 'order', 'button', 'color', themeVariant])};
        border-color: ${get(['theme', 'order', 'button', 'background', themeVariant])};
        background-color: ${get(['theme', 'order', 'button', 'background', themeVariant])};
      }
    }
  `,
);

const getBorderColor = ({ isError, themeVariant }) => {
  const borderType = isError ? THEME_VARIANT.warning : themeVariant;

  const borderColor = get(['theme', 'order', 'input', 'border', borderType]);

  return borderColor;
};

export const InputFieldContent = styled.div(
  ({ themeVariant }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;

    label {
      align-self: flex-start;
      margin-bottom: 10px;
      color: ${get(['theme', 'order', 'label', themeVariant])};
    }

    span {
      position: absolute;
      padding-top: 20px;
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      transition: 0.3s ease;
      color: ${get(['theme', 'order', 'input', 'color', themeVariant])};
      border-bottom: 1px solid ${getBorderColor};
    }
  `,
);

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
