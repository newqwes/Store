import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import ButtonWrapper from './styled';

const Button = ({ text, onClick, themeVariant }) => (
  <ButtonWrapper onClick={onClick} themeVariant={themeVariant}>
    {text}
  </ButtonWrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  themeVariant: PropTypes.string,
};

Button.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Button;
