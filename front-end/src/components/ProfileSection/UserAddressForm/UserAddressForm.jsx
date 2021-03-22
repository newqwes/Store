import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Flex from '../../Flex';
import InputField from '../../InputField';

import DIRECTION from '../../../constants/direction';

import { CustomLabel, InputFieldContent } from '../styled';
import YandexInput from '../../YandexInput';

class UserAddressForm extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render() {
    const { updateUser, handleSubmit, reset } = this.props;

    return (
      <Flex direction={DIRECTION.column}>
        <CustomLabel>Ваш адрес</CustomLabel>
        <YandexInput />
        <form>
          <Field
            type='text'
            name='city'
            label='Город'
            placeholder='Город'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='street'
            label='Улица'
            placeholder='Улица'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='home'
            label='Дом'
            placeholder='Дом'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='apartment'
            label='Квартира'
            placeholder='Квартира'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
        </form>
      </Flex>
    );
  }
}

export default UserAddressForm;
