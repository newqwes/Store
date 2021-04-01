import styled from 'styled-components';
import { get } from 'lodash/fp';

import { JITTER, SCALE } from '../../../constants/animation';

import LabelWrapper from '../../Label/styled';

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

export const PopupWrapper = styled.div`
  position: fixed;
  z-index: 1;
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
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: #fff;
`;

export const Submit = styled.span`
  font-size: 16px;
  cursor: pointer;
  padding-left: 24px;
  color: ${getAccentColor};
`;

export const Message = styled.span`
  font-size: 38px;
  opacity: 0.8;
  color: ${getAccentColor};
`;

export const InputFieldContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 0;

  span {
    position: absolute;
    width: 100%;
  }

  input {
    width: 90%;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
    padding: 6px 15px;
    border-radius: 4px;
    border: 1px solid ${getInputBorderColor};
    font-size: 14px;
  }
`;

export const SelectFieldContent = styled.div`
  display: flex;
  align-items: center;

  select,
  input {
    width: 100%;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
    padding: 5px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid ${getInputBorderColor};
    background-color: ${getInputBackgroundColor};
    font-size: 14px;
  }

  select {
    cursor: pointer;
  }
`;

export const AddWrapper = styled.span`
  margin-bottom: 30px;
  margin-left: 15px;
  opacity: 0.7;
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

export const СrossWrapper = styled.span`
  position: absolute;
  right: 0;
  margin: 5px 10px;
  animation: none;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const RubbishWrapper = styled.span`
  bottom: 0;
  align-self: center;
  opacity: 0.7;
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

export const PopupHeader = styled.div`
  position: relative;
  background-color: #eee;
  padding: 20px;
`;

export const PopupBody = styled.div`
  padding: 20px;

  label {
    margin-right: 10px;
    width: 80px;
  }
`;

export const NameAndType = styled.div`
  display: flex;

  div:first-child {
    flex-basis: 80%;
    padding-right: 10px;
  }
`;

export const PriceAndValue = styled.div`
  display: flex;
  margin-top: 10px;

  input,
  select {
    width: 70px;
    margin-bottom: 10px;
  }
`;

export const OptionListContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  input {
    width: 70px;
  }

  ${LabelWrapper} {
    display: none;
  }

  label {
    margin: 0;
    width: 0;
  }
`;

export const ButtonsBlock = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
`;
