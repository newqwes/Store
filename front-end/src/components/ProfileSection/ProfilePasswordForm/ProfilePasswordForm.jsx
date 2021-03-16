import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import DIRECTION from '../../../constants/direction';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import Flex from '../../Flex';
import InputField from '../../InputField';

import { InputFieldContent, Submit, Message, CustomLabel } from '../styled';

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
    statusMessage: '',
  };

  removeStatusMessage = () => {
    const { statusMessage } = this.state;

    if (statusMessage) this.setState({ statusMessage: '' });
  };

  handleClick = () => {
    const { updateUser, handleSubmit, valid, reset } = this.props;

    const statusMessage = valid ? 'Пароль успешно изменен!' : 'Ошибка! Попробуйте снова.';

    this.setState({ statusMessage });

    handleSubmit(updateUser)();
    reset();
  };

  render() {
    const { statusMessage } = this.state;
    const { themeVariant } = this.props;

    return (
      <Flex direction={DIRECTION.column}>
        <CustomLabel>Изменение пароля</CustomLabel>
        <form>
          <Field
            type='password'
            name='password'
            onChange={this.removeStatusMessage}
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
            <Submit themeVariant={themeVariant} onClick={this.handleClick}>
              Изменить
            </Submit>

            <Message themeVariant={themeVariant}>{statusMessage}</Message>
          </Flex>
        </form>
      </Flex>
    );
  }
}

export default ProfilePasswordForm;
