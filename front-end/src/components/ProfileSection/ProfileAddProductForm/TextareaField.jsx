import React from 'react';
import { noop } from 'lodash/fp';

import fieldInputType from '../../InputField/propTypes';
import THEME_VARIANT from '../../../constants/themeVariant';
import ErrorLabel from '../../InputField/ErrorLabel.jsx';

class TextareaField extends React.Component {
  static propTypes = fieldInputType;

  static defaultProps = {
    control: false,
    reset: noop(),
    submit: noop(),
    placeholder: '',
    themeVariant: THEME_VARIANT.default,
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
        <textarea
          name={name}
          onDrop={onDrop}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}>
          {children}
        </textarea>
        {touched && error && <ErrorLabel text={error} />}
      </FieldStyle>
    );
  }
}

export default TextareaField;
