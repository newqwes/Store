import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';

const NavbarItem = ({ title, link }) => (
  <li>
    <Link to={link}>{title}</Link>
  </li>
);

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavbarItem;
