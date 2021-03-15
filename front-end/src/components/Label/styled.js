import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

const LabelWrapper = styled.span(
  ({ themeVariant, fontWeight, fontSize, textAlign }) => css`
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    color: ${get(['theme', 'label', 'color', themeVariant])};
    text-align: ${textAlign};
  `,
);

export default LabelWrapper;
