import React from 'react';

import PropTypes from 'prop-types';

import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import THEME_VARIANT from '../../constants/themeVariant';

import LabelWrapper from './styled';

const Label = ({ text, fontSize, textAlign, fontWeight, themeVariant }) => (
  <LabelWrapper
    fontSize={fontSize}
    textAlign={textAlign}
    fontWeight={fontWeight}
    themeVariant={themeVariant}>
    {text}
  </LabelWrapper>
);

Label.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.number,
  themeVariant: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  fontSize: FONT_SIZE.medium,
  fontWeight: FONT_WEIGHT.bold,
  textAlign: TEXT_ALIGN.left,
  themeVariant: THEME_VARIANT.default,
};

export default Label;
