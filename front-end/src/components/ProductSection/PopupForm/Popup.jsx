import React from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import DIRECTION from '../../../constants/direction';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import Flex from '../../Flex';
import Cross from '../../Icons/Сross';
import InputField from '../../InputField';
import Options from './Options.jsx';
import SelectField from './SelectField.jsx';

import {
  InputFieldContent,
  CustomLabel,
  Submit,
  Message,
  SelectFieldContent,
  SmallInputFieldContent,
  PopupWrapper,
  PopupContent,
  CrossWrapper,
} from './styled';

class EditPopup extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    handleSubmit: PropTypes.func,
    reset: PropTypes.any,
    valid: PropTypes.any,
    closePopup: PropTypes.func.isRequired,
    submitProduct: PropTypes.func.isRequired,
    popupTitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
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
    const { themeVariant, reset, closePopup, popupTitle, category } = this.props;
    const { statusMessage } = this.state;

    return (
      <PopupWrapper>
        <PopupContent>
          <CustomLabel>{popupTitle}</CustomLabel>
          <CrossWrapper>
            <Cross onClick={closePopup} />
          </CrossWrapper>
          <form>
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
              defaultValue={category}
              component={SelectField}
              fieldStyle={SelectFieldContent}
            >
              <option value='pizza'>пицца</option>
              <option value='chicken'>курица</option>
              <option value='salad'>салат</option>
              <option value='drink'>напиток</option>
              <option value='sauce'>соус</option>
            </Field>
            <Field
              type='text'
              name='photoUrl'
              label='Ссылка на картинку'
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
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Field
                type='text'
                name='currencySign'
                label='Валюта'
                defaultValue='р.'
                component={SelectField}
                fieldStyle={SmallInputFieldContent}
              >
                <option value='р.'>р.</option>
                <option value='$'>$</option>
              </Field>
              <Field
                type='text'
                name='unitSign'
                label='Мера'
                defaultValue='гр'
                component={SelectField}
                fieldStyle={SmallInputFieldContent}
              >
                <option value='гр'>гр.</option>
                <option value='мл'>мл.</option>
                <option value='л'>л.</option>
              </Field>
            </Flex>
            <FieldArray name='options' component={Options} />

            <Flex justifyContent={JUSTIFY_CONTENT.center} direction={DIRECTION.column}>
              <Flex justifyContent={JUSTIFY_CONTENT.center}>
                <Submit themeVariant={themeVariant} onClick={this.handleClick}>
                  Изменить
                </Submit>
                <Submit themeVariant={themeVariant} onClick={reset}>
                  Сбросить
                </Submit>
              </Flex>
              <Message themeVariant={themeVariant}>{statusMessage}</Message>
            </Flex>
          </form>
        </PopupContent>
      </PopupWrapper>
    );
  }
}

export default EditPopup;
