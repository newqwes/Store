import React from 'react';
import PropTypes from 'prop-types';

import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Label from '../Label';

const ErrorLabel = ({ text }) => (
  <Flex justifyContent={JUSTIFY_CONTENT.center}>
    <Label
      text={text}
      fontWeight={FONT_WEIGHT.normal}
      fontSize={FONT_SIZE.least}
      themeVariant={THEME_VARIANT.warning}
    />
  </Flex>
);

ErrorLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorLabel;
