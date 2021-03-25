import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import THEME_VARIANT from '../../constants/themeVariant';

import { Wrapper } from './styled';

const Link = ({ href, to, children, themeVariant }) => {
  const Component = to ? NavLink : 'a';

  return (
    <Wrapper themeVariant={themeVariant}>
      <Component to={to} href={href}>
        {children}
      </Component>
    </Wrapper>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  themeVariant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  href: '',
  to: '',
  themeVariant: THEME_VARIANT.default,
};

export default Link;
