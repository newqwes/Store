import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../Link';

const NavbarItem = ({ title, href, link }) => (
  <li>
    <Link to={link} href={href}>
      {title}
    </Link>
  </li>
);

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  href: PropTypes.string,
};

NavbarItem.defaultProps = {
  link: '',
  href: '',
};

export default NavbarItem;
