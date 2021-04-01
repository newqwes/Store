import PropTypes from 'prop-types';

const fieldInputType = {
  reset: PropTypes.func,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  yandex: PropTypes.bool,
  submit: PropTypes.func,
  control: PropTypes.bool,
  placeholder: PropTypes.string,
  themeVariant: PropTypes.string,
  label: PropTypes.string,
  fieldStyle: PropTypes.elementType.isRequired,

  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
