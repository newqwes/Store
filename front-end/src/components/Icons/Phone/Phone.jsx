import React from 'react';
import PropTypes from 'prop-types';
import ICON_SIZE from '../../../constants/iconSize';

const Phone = ({ size }) => (
  <svg height={size} width={size} viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M418.694 243.685c-1.433-1.517 3.308 3.25-79.232-79.291A15.002 15.002 0 0 0 313.855 175v322c0 8.284 6.716 15 15 15h80a14.999 14.999 0 0 0 14.71-12.066l27.95-140.15c8.475-42.197-3.81-85.615-32.821-116.099z'
      fill='#f5dccc'
    />
    <path
      d='m364.618 288.977-46.37-46.37c-5.858-5.858-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0l46.37 46.37c5.858 5.858 5.858 15.355 0 21.213-5.856 5.857-15.355 5.858-21.213 0z'
      fill='#f0cabb'
    />
    <path
      d='M343.855 45v422c0 24.81-20.19 45-45 45h-196c-24.81 0-45-20.19-45-45V45c0-24.81 20.19-45 45-45h196c24.81 0 45 20.19 45 45z'
      fill='#bceaf9'
    />
    <path
      d='M343.855 45v422c0 24.81-20.19 45-45 45h-98V0h98c24.81 0 45 20.19 45 45z'
      fill='#78b7ea'
    />
    <path
      d='M298.855 0h-196c-24.81 0-45 20.19-45 45v422c0 24.81 20.19 45 45 45h196c24.81 0 45-20.19 45-45V45c0-24.81-20.19-45-45-45zm15 417h-226V45c0-8.27 6.73-15 15-15h196c8.27 0 15 6.73 15 15z'
      fill='#425796'
    />
    <path
      d='M343.855 45v422c0 24.81-20.19 45-45 45h-98v-95h113V45c0-8.27-6.73-15-15-15h-98V0h98c24.81 0 45 20.19 45 45z'
      fill='#283758'
    />
    <path
      d='M314.288 237.914c-8.555-8.682-20.364-13.969-33.434-13.969-25.951 0-47 20.99-47 46.995 0 12.499 4.842 24.25 13.639 33.111l57.462 59.983c-6.516 4.964-14.073 11.874-21.457 21.231-22.324 28.292-33.643 65.885-33.643 111.735v15h110V285.221z'
      fill='#f5dccc'
    />
  </svg>
);

Phone.propTypes = {
  size: PropTypes.number,
};

Phone.defaultProps = {
  size: ICON_SIZE.medium,
};

export default Phone;
