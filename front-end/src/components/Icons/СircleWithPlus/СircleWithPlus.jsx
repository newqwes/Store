import React from 'react';
import PropTypes from 'prop-types';

import ICON_SIZE from '../../../constants/iconSize';

const СircleWithPlus = ({ size }) => (
  <svg height={size} width={size} viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    <path d='M256 512C114.836 512 0 397.164 0 256S114.836 0 256 0s256 114.836 256 256-114.836 256-256 256zm0-480C132.48 32 32 132.48 32 256s100.48 224 224 224 224-100.48 224-224S379.52 32 256 32zm0 0' />
    <path d='M368 272H144c-8.832 0-16-7.168-16-16s7.168-16 16-16h224c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0' />
    <path d='M256 384c-8.832 0-16-7.168-16-16V144c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16zm0 0' />
  </svg>
);

СircleWithPlus.propTypes = {
  size: PropTypes.number,
};

СircleWithPlus.defaultProps = {
  size: ICON_SIZE.medium,
};

export default СircleWithPlus;
