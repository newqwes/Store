import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';
import { NavLink } from 'react-router-dom';

import Label from '../Label/styled';

export const PopupWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 5%;
  bottom: 5%;
  margin: auto;
  background: #fff;
  padding: 25px;
  overflow: scroll;

  button {
    height: 30px;
    width: 30px;
  }
`;

export const CrossWrapper = styled.span`
  position: fixed;
  right: 22%;
  top: 5%;
  fill: #fff;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const CustomLabel = styled(Label)`
  font-size: 24px;
  margin: 30px 0 10px;
`;

const getAccentColor = ({ themeVariant }) =>
  get(['theme', 'profile', 'delete', 'color', themeVariant]);

export const Submit = styled.span`
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
  color: ${getAccentColor};
`;

export const Message = styled.span`
  font-size: 14px;
  opacity: 0.6;
  color: ${getAccentColor};
`;

export const CustomLink = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: ${getAccentColor};
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 20px 0;

  span {
    cursor: pointer;
    color: ${getAccentColor};
    padding: 0 5px;
  }
`;

const getInputBackgroundColor = ({ themeVariant, disabled }) => {
  const inputStatus = disabled ? 'disabled' : 'active';

  const backgroundColor = get([
    'theme',
    'profile',
    'input',
    inputStatus,
    'background',
    themeVariant,
  ]);

  return backgroundColor;
};

const getInputBorderColor = ({ themeVariant, isError }) => {
  const inputStatus = isError ? 'error' : 'default';

  const borderColor = get(['theme', 'profile', 'input', 'border', inputStatus, themeVariant]);

  return borderColor;
};

export const InputFieldContent = styled.div(
  () => css`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    margin: 10px 0;
    position: relative;

    span {
      position: absolute;
    }

    input {
      margin: 10px 0;
      min-width: 150px;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      height: 36px;
      padding: 14px 16px;
      border-radius: 8px;
      border: 1px solid ${getInputBorderColor};
      background-color: ${getInputBackgroundColor};
      font-size: 16px;
      line-height: 20px;
    }
  `,
);

export const SelectFieldContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    select {
      margin-left: 10px;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      height: 46px;
      padding: 0 16px;
      width: 50%;
      min-width: 50px;
      border-radius: 12px;
      border: 1px solid ${getInputBorderColor};
      background-color: ${getInputBackgroundColor};
      font-size: 16px;
      line-height: 20px;
    }
  `,
);

export const SmallInputFieldContent = styled.div(
  () => css`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    padding: 20px;

    input,
    select {
      margin: 10px 0;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      height: 46px;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid ${getInputBorderColor};
      background-color: ${getInputBackgroundColor};
      font-size: 16px;
      line-height: 20px;
    }

    select {
      padding: 0 16px;
    }

    span {
      position: absolute;
    }
  `,
);

export const OptionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
