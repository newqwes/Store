import PropTypes from 'prop-types';

import { fieldType } from '../../propType';

const contentType = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,

  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }),

  fields: PropTypes.arrayOf(fieldType),
};

export default contentType;
