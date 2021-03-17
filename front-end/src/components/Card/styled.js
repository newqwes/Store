import { get } from 'lodash/fp';
import styled, { css } from 'styled-components';

import LabelWrapper from '../Label/styled';

export const CardWrapper = styled.div`
  display: flex;
  flex-basis: 19%;
  flex-direction: column;
  align-content: space-between;
  position: relative;
  margin: 28px 7px;
  padding: 10px 20px;
  transition: 0.3s ease;
  border-radius: 20px;
`;

export const Description = styled(LabelWrapper)`
  opacity: 0.7;
`;

export const CardContent = styled.div(
  ({ themeVariant }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    line-height: 18px;

    &:last-child {
      margin-top: auto;
    }

    button {
      margin-left: 16px;
      letter-spacing: 0;
      border: none;
      font-weight: normal;
      border-radius: 20px;
      padding: 8px 20px;
      font-size: 16px;
      line-height: 24px;
      background-color: ${get(['theme', 'card', 'button', 'background', themeVariant])};
      color: ${get(['theme', 'card', 'button', 'color', themeVariant])};
      transition: 0.3s;

      :hover {
        background-color: ${get(['theme', 'card', 'button', 'hover', themeVariant])};
      }

      :active {
        background-color: ${get(['theme', 'card', 'button', 'background', themeVariant])};
      }
    }

    > * {
      display: flex;
      margin: 5px;
    }
  `,
);
