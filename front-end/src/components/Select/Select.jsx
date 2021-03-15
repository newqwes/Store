import React from 'react';
import PropTypes from 'prop-types';
import SelectWrapper from './styled';
import THEME_VARIANT from '../../constants/themeVariant';
import { optionsType } from '../../propType';

const Select = ({ options, onChange, unitSign, themeVariant }) => {
  const mapOptions = options.map(({ weight }) => (
    <option key={weight} value={weight}>
      {weight} {unitSign}
    </option>
  ));

  return (
    <SelectWrapper themeVariant={themeVariant} onChange={onChange}>
      {mapOptions}
    </SelectWrapper>
  );
};

Select.propTypes = {
  unitSign: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(optionsType),
  onChange: PropTypes.func,
  themeVariant: PropTypes.string,
};

Select.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Select;
