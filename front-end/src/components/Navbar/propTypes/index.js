import PropTypes from 'prop-types';

const itemsType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    link: PropTypes.string,
    title: PropTypes.string,
  }),
);

export default itemsType;
