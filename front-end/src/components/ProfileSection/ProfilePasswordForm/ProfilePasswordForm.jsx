/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FONT_SIZE from '../../../constants/fontSize';
import DIRECTION from '../../../constants/direction';
import FONT_WEIGHT from '../../../constants/fontWeight';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import Flex from '../../Flex';
import Label from '../../Label';
import InputField from '../../InputField';

import { InputFieldContent, Submit, Message } from '../styled';

class ProfilePasswordForm extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    themeVariant: PropTypes.string,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    message: '',
  };

  handleChange = () => {
    if (this.state.message) this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    const { updateUser, handleSubmit, valid, reset, themeVariant } = this.props;

    const handleClick = () => {
      handleSubmit(updateUser)();

      if (valid) this.setState({ message: 'Пароль успешно изменен!' });
      else {
        this.setState({ message: 'Ошибка! Попробуйте снова.' });
        reset();
      }
    };

    return (
      <Flex direction={DIRECTION.column}>
        <Label text='Изменение пароля' fontSize={FONT_SIZE.large} fontWeight={FONT_WEIGHT.bold} />
        <form>
          <Field
            type='password'
            name='password'
            onChange={this.handleChange}
            label='Новый пароль'
            component={InputField}
            fieldStyle={InputFieldContent}
          />
          <Field
            type='password'
            name='confirmPassword'
            label='Подтвердить пароль'
            component={InputField}
            fieldStyle={InputFieldContent}
          />
          <Flex justifyContent={JUSTIFY_CONTENT.center} direction={DIRECTION.column}>
            <Submit themeVariant={themeVariant} onClick={handleClick}>
              Изменить
            </Submit>

            <Message themeVariant={themeVariant}>{message}</Message>
          </Flex>
        </form>
      </Flex>
    );
  }
}

export default ProfilePasswordForm;
