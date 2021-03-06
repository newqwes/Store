import styled from 'styled-components';
import { get } from 'lodash/fp';
import { NavLink } from 'react-router-dom';

import Label from '../Label/styled';

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

const getAccentColor = ({ themeVariant }) =>
  get(['theme', 'profile', 'delete', 'color', themeVariant]);

export const CustomLabel = styled(Label)`
  font-size: 24px;
  margin: 30px 0 10px;
`;

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

export const Text = styled.p`
  font-size: 14px;
  margin: 20px 0;

  span {
    cursor: pointer;
    color: ${getAccentColor};
    padding: 0 5px;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: ${getAccentColor};
`;

export const InputFieldContent = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  margin: 30px 0;
  position: relative;

  span {
    position: absolute;
  }

  input {
    margin: 10px 0;
    min-width: 400px;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
    height: 46px;
    padding: 14px 95px 14px 16px;
    border-radius: 12px;
    border: 1px solid ${getInputBorderColor};
    background-color: ${getInputBackgroundColor};
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SelectFieldContent = styled.div`
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
`;

export const SmallInputFieldContent = styled.div`
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
`;

export const OptionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
