import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

const ValueFormatterWrapper = styled.span(
  ({ themeVariant, fontSize, textAlign, fontWeight }) => css`
    letter-spacing: 0.1em;
    font-size: ${fontSize}px;
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    color: ${get(['theme', 'label', 'color', themeVariant])};
  `,
);

export default ValueFormatterWrapper;
