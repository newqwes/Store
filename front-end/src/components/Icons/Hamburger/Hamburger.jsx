import React from 'react';
import PropTypes from 'prop-types';
import ICON_SIZE from '../../../constants/iconSize';

const Hamburger = ({ size }) => (
  <svg height={size} width={size} viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    <path d='M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0' />
  </svg>
);

Hamburger.propTypes = {
  size: PropTypes.number,
};

Hamburger.defaultProps = {
  size: ICON_SIZE.medium,
};

export default Hamburger;
