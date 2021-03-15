import { INPUT_NAME, INPUT_TYPE, INPUT_PLACEHOLDER, INPUT_LABEL } from './input';

const ORDER_FIELDS = [
  {
    name: INPUT_NAME.city,
    type: INPUT_TYPE.text,
    label: INPUT_LABEL.city,
    placeholder: INPUT_PLACEHOLDER.city,
  },
  {
    name: INPUT_NAME.street,
    type: INPUT_TYPE.text,
    label: INPUT_LABEL.street,
    placeholder: INPUT_PLACEHOLDER.street,
  },
  {
    name: INPUT_NAME.home,
    type: INPUT_TYPE.text,
    label: INPUT_LABEL.home,
    placeholder: INPUT_PLACEHOLDER.home,
  },
  {
    name: INPUT_NAME.apartment,
    type: INPUT_TYPE.text,
    label: INPUT_LABEL.apartment,
    placeholder: INPUT_PLACEHOLDER.apartment,
  },
  {
    name: INPUT_NAME.email,
    type: INPUT_TYPE.text,
    label: INPUT_LABEL.email,
    placeholder: INPUT_PLACEHOLDER.email,
  },
  {
    name: INPUT_NAME.phone,
    type: INPUT_TYPE.text,
    label: INPUT_LABEL.phone,
    placeholder: INPUT_PLACEHOLDER.phone,
  },
];

export default ORDER_FIELDS;
