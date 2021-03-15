import React from 'react';
import PropTypes from 'prop-types';

import FONT_SIZE from '../../constants/fontSize';
import TEXT_ALIGN from '../../constants/textAlign';
import FONT_WEIGHT from '../../constants/fontWeight';
import THEME_VARIANT from '../../constants/themeVariant';

import ValueFormatterWrapper from './styled';

const ValueFormatter = ({
  value,
  prefix,
  postfix,
  fontSize,
  textAlign,
  fontWeight,
  themeVariant,
}) => (
  <ValueFormatterWrapper
    fontSize={fontSize}
    textAlign={textAlign}
    fontWeight={fontWeight}
    themeVariant={themeVariant}
  >
    {prefix}
    {value}
    {postfix}
  </ValueFormatterWrapper>
);

ValueFormatter.propTypes = {
  postfix: PropTypes.string,
  prefix: PropTypes.string,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.number,
  themeVariant: PropTypes.string,
  value: PropTypes.number.isRequired,
};

ValueFormatter.defaultProps = {
  prefix: '',
  postfix: '',
  textAlign: TEXT_ALIGN.left,
  fontSize: FONT_SIZE.medium,
  fontWeight: FONT_WEIGHT.bold,
  themeVariant: THEME_VARIANT.default,
};

export default ValueFormatter;
