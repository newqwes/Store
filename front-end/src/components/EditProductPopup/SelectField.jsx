import React from 'react';
import { noop } from 'lodash/fp';

import THEME_VARIANT from '../../constants/themeVariant';
import fieldInputType from '../InputField/propTypes';

class SelectField extends React.Component {
  static propTypes = fieldInputType;

  static defaultProps = {
    control: false,
    reset: noop(),
    submit: noop(),
    placeholder: '',
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    disabled: true,
  };

  render() {
    const {
      label,
      placeholder,
      themeVariant,
      children,
      fieldStyle: FieldStyle,
      meta: { touched, error },
      input: { name, onChange, onBlur, onDrop },
    } = this.props;

    return (
      <FieldStyle isError={touched && error} themeVariant={themeVariant}>
        <label>{label}</label>
        <select
          name={name}
          onDrop={onDrop}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}>
          {children}
        </select>
      </FieldStyle>
    );
  }
}

export default SelectField;
