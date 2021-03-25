import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

const FooterWrapper = styled.footer(
  ({ themeVariant }) => css`
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    padding: 20px 15%;
    background: ${get(['theme', 'background', 'color', themeVariant])};
    color: ${get(['theme', 'footer', 'color', themeVariant])};

    a {
      color: ${get(['theme', 'footer', 'color', themeVariant])};
      opacity: 0.7;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;

      :hover {
        opacity: 1;
      }
    }

    span {
      font-size: 17px;
      font-weight: 500;
      line-height: 28px;
    }
  `,
);

export default FooterWrapper;
