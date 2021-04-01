import React from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';
import DIRECTION from '../../../constants/direction';
import ICON_SIZE from '../../../constants/iconSize';
import FONT_WEIGHT from '../../../constants/fontWeight';

import Label from '../../Label';
import Flex from '../../Flex';
import InputField from '../../InputField';
import OptionsField from './OptionsField.jsx';
import SelectField from './SelectField.jsx';
import Сross from '../../Icons/Сross';

import {
  InputFieldContent,
  Submit,
  Message,
  SelectFieldContent,
  PopupWrapper,
  PopupContent,
  PopupHeader,
  PopupBody,
  NameAndType,
  PriceAndValue,
  ButtonsBlock,
  СrossWrapper,
} from './styled';

const productType = {
  pizza: 'пиццу',
  salad: 'салат',
  drink: 'напиток',
  sauce: 'соус',
  chicken: 'курицу',
};

class Popup extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    label: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired,
    submitProduct: PropTypes.func.isRequired,
    initialValues: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keydownTarget);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownTarget);
  }

  state = {
    statusMessage: '',
  };

  keydownTarget = ({ key }) => isEqual(key, 'Escape') && this.props.closePopup();

  handleClick = () => {
    const { handleSubmit, submitProduct, valid, closePopup } = this.props;

    if (valid) {
      handleSubmit(submitProduct)();
      closePopup();

      return;
    }

    this.setState({ statusMessage: 'Ошибка! Не валидные данные.' });
  };

  render() {
    const {
      themeVariant,
      reset,
      closePopup,
      label,
      initialValues: { type },
    } = this.props;
    const { statusMessage } = this.state;

    const labelText = `${label} ${productType[type]}`;

    return (
      <PopupWrapper>
        <PopupContent>
          <PopupHeader>
            <Label text={labelText} fontWeight={FONT_WEIGHT.normal} />
            <СrossWrapper onClick={closePopup}>
              <Сross size={ICON_SIZE.small} />
            </СrossWrapper>
          </PopupHeader>
          <PopupBody>
            <form>
              <NameAndType>
                <Field
                  type='text'
                  name='name'
                  label='Название'
                  component={InputField}
                  fieldStyle={InputFieldContent}
                />
                <Field
                  name='type'
                  label='Тип:'
                  defaultValue={type}
                  component={SelectField}
                  fieldStyle={SelectFieldContent}>
                  <option value='pizza'>пицца</option>
                  <option value='chicken'>курица</option>
                  <option value='salad'>салат</option>
                  <option value='drink'>напиток</option>
                  <option value='sauce'>соус</option>
                </Field>
              </NameAndType>
              <Field
                type='text'
                name='photoUrl'
                label='Фото'
                component={InputField}
                fieldStyle={InputFieldContent}
              />
              <Field
                type='text'
                name='description'
                label='Описание'
                component={InputField}
                fieldStyle={InputFieldContent}
              />
              <PriceAndValue>
                <Flex direction={DIRECTION.column}>
                  <Field
                    type='text'
                    name='currencySign'
                    label='Валюта'
                    defaultValue='р.'
                    component={SelectField}
                    fieldStyle={SelectFieldContent}>
                    <option value='р.'>р.</option>
                    <option value='$'>$</option>
                  </Field>
                  <Field
                    type='text'
                    name='unitSign'
                    label='Мера'
                    defaultValue='гр'
                    component={SelectField}
                    fieldStyle={SelectFieldContent}>
                    <option value='гр'>гр.</option>
                    <option value='мл'>мл.</option>
                    <option value='л'>л.</option>
                  </Field>
                </Flex>
                <FieldArray name='options' component={OptionsField} />
              </PriceAndValue>
            </form>
          </PopupBody>
          <ButtonsBlock>
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Submit themeVariant={themeVariant} onClick={this.handleClick}>
                {label}
              </Submit>
              <Submit themeVariant={themeVariant} onClick={reset}>
                Сбросить
              </Submit>
            </Flex>
            <Message themeVariant={themeVariant}>{statusMessage}</Message>
          </ButtonsBlock>
        </PopupContent>
      </PopupWrapper>
    );
  }
}

export default Popup;
