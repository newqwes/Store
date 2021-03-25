import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { get, getOr, noop } from 'lodash/fp';

import fieldInputType from './propTypes';

import THEME_VARIANT from '../../constants/themeVariant';

import ErrorLabel from './ErrorLabel.jsx';
import InputControl from './InputControl.jsx';

class InputField extends React.Component {
  static propTypes = fieldInputType;

  static defaultProps = {
    control: false,
    country: 'Беларусь',
    id: '',
    yandex: false,
    reset: noop(),
    submit: noop(),
    placeholder: '',
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    disabled: true,
  };

  handleEdit = () => this.setState({ disabled: false });

  handleSave = () => {
    const pristine = getOr(null, ['meta', 'pristine'], this.props);
    const error = getOr(null, ['meta', 'error'], this.props);

    if (pristine || error) return;

    this.props.submit();
    this.setState({ disabled: true });
  };

  handleCancel = () => {
    this.props.reset();
    this.setState({ disabled: true });
  };

  loadSuggest = ymaps => {
    const { country, id } = this.props;

    const suggestView = new ymaps.SuggestView(id, {
      provider: {
        suggest: request => ymaps.suggest(`${country} ${request}`),
      },
    });

    suggestView.events.add('select', e => {
      const address = get('value', e.get('item'));
      console.log(address);
    });
  };

  render() {
    const {
      type,
      label,
      id,
      yandex,
      control,
      placeholder,
      themeVariant,
      error: errorFromArrayField,
      fieldStyle: FieldStyle,
      meta: { touched, error, pristine },
      input: { name, value, onChange, onBlur, onDragStart, onDrop },
    } = this.props;

    const { disabled } = this.state;

    const errorText = error || errorFromArrayField;
    const isError = touched && errorText;
    const inputYandexId = yandex ? id : undefined;

    return (
      <FieldStyle
        isError={isError}
        themeVariant={themeVariant}
        disabled={control && disabled}
        pristine={pristine}
      >
        <label>{label}</label>
        <input
          name={name}
          type={type}
          value={value}
          onDrop={onDrop}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          onDragStart={onDragStart}
          disabled={control && disabled}
          id={inputYandexId}
        />
        {control && (
          <InputControl
            disabled={disabled}
            onEdit={this.handleEdit}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
            pristine={pristine}
            error={error}
            themeVariant={themeVariant}
          />
        )}
        {isError && <ErrorLabel text={errorText} />}
        {yandex && (
          <YMaps>
            <Map
              modules={['SuggestView', 'suggest']}
              height='0'
              onLoad={ymaps => this.loadSuggest(ymaps)}
              defaultState={{ center: [53.677834, 23.829529] }}
            />
          </YMaps>
        )}
      </FieldStyle>
    );
  }
}

export default InputField;
