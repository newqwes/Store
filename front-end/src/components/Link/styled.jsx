import styled, { css } from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { get } from 'lodash/fp';

const sharedStyle = ({ themeVariant }) => css`
  font-size: 22px;
  color: ${get(['theme', 'label', 'color', themeVariant])};
  font-weight: bold;
  text-decoration: none;
`;

export const CustomNavLink = styled(({ themeVariant, ...props }) => <NavLink {...props} />)`
  ${sharedStyle}
`;

export const CustomLink = styled.a`
  ${sharedStyle}
`;
