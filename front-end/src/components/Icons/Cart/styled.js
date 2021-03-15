import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

const CartWrapper = styled.div(
  ({ themeVariant }) => css`
    position: relative;
    div {
      position: absolute;
      left: 50%;
      top: 40%;

      display: flex;
      justify-content: center;
      align-items: center;

      min-width: 20px;
      min-height: 20px;
      background-color: white;
      border-radius: 50%;

      span {
        text-align: center;
        color: ${get(['theme', 'icon', 'cart', 'color', themeVariant])};
        font-size: 13px;
      }
    }
  `,
);

export default CartWrapper;
