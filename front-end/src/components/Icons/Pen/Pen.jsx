import React from 'react';
import PropTypes from 'prop-types';

import ICON_SIZE from '../../../constants/iconSize';
import THEME_VARIANT from '../../../constants/themeVariant';

import PenWrapper from './styled';

const Pen = ({ height, width, themeVariant, onClick }) => (
  <PenWrapper themeVariant={themeVariant}>
    <svg
      id='Pen_1'
      enableBackground='new 0 0 512 512'
      height={height}
      onClick={onClick}
      viewBox='0 0 512 512'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m341.730469 49.054688c15.601562 15.640624 15.601562 40.957031 0 56.597656l-17.699219 17.800781-83.699219-83.699219 17.800781-17.800781c15.640626-15.601563 40.957032-15.601563 56.597657 0zm0 0'
        fill='#f8ec7d'
      />
      <path
        d='m135.632812 311.753906-125.601562 41.898438 41.898438-125.597656zm0 0'
        fill='#f8ec7d'
      />
      <path
        d='m51.886719 228.082031 188.371093-188.371093 83.722657 83.71875-188.371094 188.371093zm0 0'
        fill='#e48e66'
      />
      <path
        d='m321.632812 14.851562c-19.535156-19.5-51.167968-19.5-70.703124 0l-17.699219 17.800782-188.398438 188.300781-.402343.398437c-.097657.101563-.097657.203126-.199219.203126-.261719.273437-.496094.574218-.699219.898437-.199219.300781-.398438.699219-.601562 1-.007813.074219-.042969.144531-.097657.199219-.101562.300781-.300781.601562-.402343.902344 0 .097656 0 .097656-.097657.199218l-41.800781 125.699219c-1.226562 3.578125-.292969 7.542969 2.398438 10.199219 1.894531 1.867187 4.445312 2.910156 7.101562 2.902344 1.085938-.019532 2.160156-.191407 3.199219-.5l125.601562-41.902344c.097657 0 .097657 0 .097657-.097656.320312-.09375.621093-.226563.902343-.402344.074219-.011719.144531-.046875.199219-.097656.722656-.339844 1.398438-.777344 2-1.300782.101562-.101562.199219-.101562.199219-.199218.101562-.101563.300781-.203126.402343-.402344l188.398438-188.199219 17.800781-17.800781c19.5-19.53125 19.5-51.167969 0-70.699219zm-295.800781 323 30.398438-91.296874 60.800781 60.796874zm109.800781-40.199218-69.601562-69.597656 174.199219-174.203126 69.601562 69.601563zm199.097657-199.097656-10.699219 10.699218-69.601562-69.601562 10.703124-10.699219c11.710938-11.699219 30.6875-11.699219 42.398438 0l27.199219 27.199219c11.601562 11.753906 11.601562 30.648437 0 42.402344zm0 0'
        fill='#63316d'
      />
    </svg>
  </PenWrapper>
);

Pen.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  themeVariant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Pen.defaultProps = {
  height: ICON_SIZE.large,
  width: ICON_SIZE.large,
  themeVariant: THEME_VARIANT.default,
};

export default Pen;
