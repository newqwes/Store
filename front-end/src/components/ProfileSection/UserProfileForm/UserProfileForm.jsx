import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FONT_SIZE from '../../../constants/fontSize';
import DIRECTION from '../../../constants/direction';
import FONT_WEIGHT from '../../../constants/fontWeight';
import ROUTER_PATH from '../../../constants/routerPath';
import THEME_VARIANT from '../../../constants/themeVariant';

import Flex from '../../Flex';
import DeleteUser from './DeleteUser.jsx';
import InputField from '../../InputField';

import { InputFieldContent, CustomLabel, CustomLink } from '../styled';

class UserProfileForm extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    updateUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const { updateUser, handleSubmit, reset, deleteUser, themeVariant } = this.props;

    return (
      <Flex direction={DIRECTION.column}>
        <CustomLabel fontSize={FONT_SIZE.large} fontWeight={FONT_WEIGHT.bold}>
          Личные данные
        </CustomLabel>
        <form>
          <Field
            type='text'
            name='login'
            label='Имя'
            reset={reset}
            control={true}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='phone'
            reset={reset}
            label='Номер телефона'
            control={true}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='email'
            label='Почта'
            reset={reset}
            control={true}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
        </form>
        <CustomLink to={ROUTER_PATH.password} themeVariant={themeVariant}>
          Изменить пароль
        </CustomLink>
        <DeleteUser deleteUser={deleteUser} />
      </Flex>
    );
  }
}

export default UserProfileForm;
