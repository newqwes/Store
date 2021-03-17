import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Link from '../../Link';
import Button from '../../Button';

import ROUTER_PATH from '../../../constants/routerPath';
import THEME_VARIANT from '../../../constants/themeVariant';

import UserInfoContent from './styled';

const UserInfo = ({ logout, userName, userAuthorized, userAdmin, editMode, edit }) => {
  if (userAuthorized) {
    return (
      <UserInfoContent>
        <Link themeVariant={THEME_VARIANT.inverted} to={ROUTER_PATH.profileMenu.user}>
          {userName}
        </Link>
        {userAdmin && <Button text={editMode ? 'Отмена' : 'Редактировать'} onClick={edit} />}
        <Button text='Выйти' onClick={logout} />
      </UserInfoContent>
    );
  }

  const history = useHistory();

  const redirectToLogin = () => {
    history.push(ROUTER_PATH.login);
  };

  return <Button text='Войти' onClick={redirectToLogin} />;
};

UserInfo.propTypes = {
  themeVariant: PropTypes.string,
  logout: PropTypes.func.isRequired,
  userAuthorized: PropTypes.bool.isRequired,
  userAdmin: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  editMode: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
};

UserInfo.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default UserInfo;
