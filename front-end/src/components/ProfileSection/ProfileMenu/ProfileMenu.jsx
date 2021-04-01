import React from 'react';
import PropTypes from 'prop-types';

import Сross from '../../Icons/Сross';
import Hamburger from '../../Icons/Hamburger';
import NavbarItem from '../../Navbar/NavbarItem';

import ROUTER_PATH from '../../../constants/routerPath';
import THEME_VARIANT from '../../../constants/themeVariant';

import { ProfileMenuWrapper, HamburgerWrapper } from './styled';

const ProfileMenu = ({ themeVariant, active, clickButtonMenu }) => (
  <ProfileMenuWrapper themeVariant={themeVariant} active={active}>
    <HamburgerWrapper onClick={clickButtonMenu} themeVariant={themeVariant}>
      {active ? <Сross /> : <Hamburger />}
    </HamburgerWrapper>
    <ul>
      <NavbarItem title='Профиль' link={ROUTER_PATH.profileMenu.user} />
      <NavbarItem title='Адрес' link={ROUTER_PATH.profileMenu.address} />
      <NavbarItem title='История' link={ROUTER_PATH.profileMenu.history} />
    </ul>
  </ProfileMenuWrapper>
);

ProfileMenu.propTypes = {
  themeVariant: PropTypes.string,
  clickButtonMenu: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

ProfileMenu.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default ProfileMenu;
