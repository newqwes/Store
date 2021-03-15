import styled, { css } from 'styled-components';

const FlexWrapper = styled.div(
  ({ justifyContent, alignItems, direction, flexBasis }) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${direction};
    flex-basis: ${flexBasis};
  `,
);

export default FlexWrapper;
