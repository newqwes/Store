import React from 'react';
import PropTypes from 'prop-types';

import NavbarItem from '../Navbar/NavbarItem';

const MenuList = ({ menuItems, menuTitle }) => {
  const items = menuItems.map(({ id, link, title }) => (
    <NavbarItem key={id} link={link} title={title} />
  ));

  return (
    <div>
      <span>{menuTitle}</span>
      <ul>{items}</ul>
    </div>
  );
};

MenuList.propTypes = {
  menuItems: PropTypes.array.isRequired,
  menuTitle: PropTypes.string.isRequired,
};

export default MenuList;
