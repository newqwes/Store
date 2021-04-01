import { get } from 'lodash/fp';
import styled, { css } from 'styled-components';
import { JITTER, SCALE } from '../../constants/animation';

import LabelWrapper from '../Label/styled';

export const RubbishWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  opacity: 0.8;
  animation: none;
  animation-duration: 0.2s;

  &:active,
  &:hover {
    opacity: 1;
  }

  &:hover {
    animation-name: ${JITTER};
  }

  &:active {
    animation-name: ${SCALE};
  }
`;

export const PenWrapper = styled.span`
  cursor: pointer;
  right: 0;
  position: absolute;
  opacity: 0.8;
  animation: none;
  animation-duration: 0.2s;

  &:active,
  &:hover {
    opacity: 1;
  }

  &:hover {
    animation-name: ${JITTER};
  }

  &:active {
    animation-name: ${SCALE};
  }
`;

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

export const AddCardWrapper = styled(CardWrapper)`
  text-align: center;
  opacity: 0.5;
  border: 2px dashed black;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const СircleWithPlusWrapper = styled.span`
  margin: auto;
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
    margin-top: auto;

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
