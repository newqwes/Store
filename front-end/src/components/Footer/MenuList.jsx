import React from 'react';
import PropTypes from 'prop-types';

import DIRECTION from '../../constants/direction';
import { ALIGN_ITEMS } from '../../constants/position';

import { footerMenuType } from '../../propType';
import Flex from '../Flex';

import NavbarItem from '../Navbar/NavbarItem';

const MenuList = ({ alignItems, menu: { menuTitle, items } }) => {
  const menuItems = items.map(({ id, link, href, title }) => (
    <NavbarItem key={id} link={link} href={href} title={title} />
  ));

  return (
    <Flex direction={DIRECTION.column} alignItems={alignItems}>
      <span>{menuTitle}</span>
      <ul>{menuItems}</ul>
    </Flex>
  );
};

MenuList.propTypes = {
  alignItems: PropTypes.string,
  menu: footerMenuType.isRequired,
};

MenuList.defaultProps = {
  alignItems: ALIGN_ITEMS.flexStart,
};

export default MenuList;
