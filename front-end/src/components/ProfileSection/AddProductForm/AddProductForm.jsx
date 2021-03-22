import React from 'react';
import { Field, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';

import DIRECTION from '../../../constants/direction';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import Flex from '../../Flex';
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
} from '../styled';

class AddProductForm extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    handleSubmit: PropTypes.func,
    addProduct: PropTypes.func,
    reset: PropTypes.any,
    valid: PropTypes.any,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    statusMessage: '',
  };

  handleClick = () => {
    const { handleSubmit, addProduct, valid, reset } = this.props;

    const statusMessage = valid ? 'Продукт успешно добавлен!' : 'Ошибка! Не валидные данные.';

    this.setState({ statusMessage });

    if (valid) {
      handleSubmit(addProduct)();
      reset();
    }
  };

  render() {
    const { themeVariant, reset } = this.props;
    const { statusMessage } = this.state;

    return (
      <Flex direction={DIRECTION.column}>
        <CustomLabel>Добавить продукт</CustomLabel>
        <form>
          <Field
            type='text'
            name='name'
            label='Название'
            component={InputField}
            fieldStyle={InputFieldContent}
          />
          <Field name='type' label='Тип:' component={SelectField} fieldStyle={SelectFieldContent}>
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
              component={SelectField}
              fieldStyle={SmallInputFieldContent}>
              <option value='р.'>р.</option>
              <option value='$'>$</option>
            </Field>
            <Field
              type='text'
              name='unitSign'
              label='Мера'
              component={SelectField}
              fieldStyle={SmallInputFieldContent}>
              <option value='гр'>гр.</option>
              <option value='мл'>мл.</option>
              <option value='л'>л.</option>
            </Field>
          </Flex>
          <FieldArray name='options' component={Options} />

          <Flex justifyContent={JUSTIFY_CONTENT.center} direction={DIRECTION.column}>
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Submit themeVariant={themeVariant} onClick={this.handleClick}>
                Создать
              </Submit>
              <Submit themeVariant={themeVariant} onClick={reset}>
                Сбросить
              </Submit>
            </Flex>
            <Message themeVariant={themeVariant}>{statusMessage}</Message>
          </Flex>
        </form>
      </Flex>
    );
  }
}

export default AddProductForm;
