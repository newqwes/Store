/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const ThemeProv = props => <ThemeProvider theme={theme.light}>{props.children}</ThemeProvider>;

export default ThemeProv;
