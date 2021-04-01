import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import ButtonWrapper from './styled';

/**
 * The only true button.
 * @author [Ashyrov Nazar](https://github.com/newqwes)
 */
const Button = ({ text, onClick, themeVariant }) => (
  <ButtonWrapper onClick={onClick} themeVariant={themeVariant}>
    {text}
  </ButtonWrapper>
);

Button.propTypes = {
  /**
   * Button label.
   */
  text: PropTypes.string.isRequired,
  /**
   * Gets called when the user clicks on the button
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: PropTypes.func.isRequired,
  /**
   * The theme for the button
   */
  themeVariant: PropTypes.string,
};

Button.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Button;
