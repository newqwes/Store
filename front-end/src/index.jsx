import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store/configureStore';

import App from './App.jsx';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <Router>
          <Route path='/' component={App} />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
