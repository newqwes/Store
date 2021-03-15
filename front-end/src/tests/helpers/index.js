import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, shallow } from 'enzyme';

import theme from '../../style/theme';

// eslint-disable-next-line react/prop-types
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
);

export const mountWithTheme = (component) =>
  mount(component, {
    wrappingComponent: ThemeProviderWrapper,
  });

export const shallowWithTheme = (component) =>
  shallow(component, {
    wrappingComponent: ThemeProviderWrapper,
  });
