import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../../constants/themeVariant';

import { Text } from '../styled';

class DeleteUser extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    deleteUser: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    popup: false,
  };

  handlerPopup = () => {
    this.setState({ popup: !this.state.popup });
  };

  handlerDeleteUser = () => {
    this.props.deleteUser();
    this.setState({ popup: false });
  };

  render() {
    const { themeVariant } = this.props;
    const { popup } = this.state;

    if (popup) {
      return (
        <Text themeVariant={themeVariant}>
          Вы уверенны что хотите удалить свой аккаунт?
          <span onClick={this.handlerDeleteUser}>ДА</span>
          или
          <span onClick={this.handlerPopup}>НЕТ</span>
        </Text>
      );
    }

    return (
      <Text themeVariant={themeVariant}>
        Вы можете
        <span onClick={this.handlerPopup}>удалить</span>
        свой аккаунт.
      </Text>
    );
  }
}

export default DeleteUser;
