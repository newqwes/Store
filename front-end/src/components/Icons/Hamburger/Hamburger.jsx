import React from 'react';
import PropTypes from 'prop-types';
import ICON_SIZE from '../../../constants/iconSize';

const Hamburger = ({ height, width }) => (
  <svg
    id='Hamburger_1'
    enableBackground='new 0 0 512 512'
    height={height}
    viewBox='0 0 512 512'
    width={width}
    xmlns='http://www.w3.org/2000/svg'>
    <path d='m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
    <path d='m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
    <path d='m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
  </svg>
);

Hamburger.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Hamburger.defaultProps = {
  width: ICON_SIZE.medium,
  height: ICON_SIZE.medium,
};

export default Hamburger;
