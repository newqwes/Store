import PropTypes from 'prop-types';

const fieldInputType = {
  reset: PropTypes.func,
  submit: PropTypes.func,
  control: PropTypes.bool,
  placeholder: PropTypes.string,
  themeVariant: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldStyle: PropTypes.elementType.isRequired,

  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
  }),

  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
  }),
};

export default fieldInputType;
