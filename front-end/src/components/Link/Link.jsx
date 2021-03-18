import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import { CustomNavLink, CustomLink } from './styled.jsx';

const Link = ({ href, to, children, themeVariant }) => {
  const Component = to ? CustomNavLink : CustomLink;

  return (
    <Component to={to} href={href} themeVariant={themeVariant}>
      {children}
    </Component>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  themeVariant: PropTypes.string,
};

Link.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Link;
