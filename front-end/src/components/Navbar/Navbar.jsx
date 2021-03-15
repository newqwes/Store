import React from 'react';
import PropTypes from 'prop-types';

import itemsType from './propTypes';
import THEME_VARIANT from '../../constants/themeVariant';

import NavbarItem from './NavbarItem';

import { NavbarItems, NavbarWrapper } from './styled';

const Navbar = ({ menuItems, themeVariant, horizontally }) => {
  const items = menuItems.map(({ id, link, title }) => (
    <NavbarItem key={id} link={link} title={title} />
  ));

  return (
    <NavbarWrapper themeVariant={themeVariant}>
      <NavbarItems themeVariant={themeVariant} horizontally={horizontally}>
        {items}
      </NavbarItems>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  menuItems: itemsType.isRequired,
  horizontally: PropTypes.bool,
  themeVariant: PropTypes.string,
};

Navbar.defaultProps = {
  horizontally: true,
  themeVariant: THEME_VARIANT.default,
};

export default Navbar;
