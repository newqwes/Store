import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';
import { NavLink } from 'react-router-dom';

import Label from '../Label/styled';

export const CustomLabel = styled(Label)`
  margin: 20px 0;
`;

const getAccentColor = ({ themeVariant }) =>
  get(['theme', 'profile', 'delete', 'color', themeVariant]);

export const Submit = styled.span`
  font-size: 16px;
  cursor: pointer;
  color: ${getAccentColor};
`;

export const Message = styled.span`
  font-size: 14px;
  margin-top: 20px;
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

export const ProfileWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const ProfileContent = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputFieldContent = styled.div(
  ({ themeVariant, disabled }) => css`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    margin: 20px 0;
    position: relative;

    input {
      margin: 10px 0;
      min-width: 350px;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      height: 46px;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid ${get(['theme', 'profile', 'input', 'border', themeVariant])};
      background-color: ${disabled &&
      get(['theme', 'profile', 'input', 'disabled', 'background', themeVariant])};
      font-size: 16px;
      line-height: 20px;
    }
  `,
);
