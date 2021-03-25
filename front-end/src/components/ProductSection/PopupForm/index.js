import { reduxForm } from 'redux-form';
import { optionsValidation, requiredValidation } from '../../../utils/fieldValidation';

import Popup from './Popup.jsx';

const validate = ({ name, description, photoUrl, options }) => ({
  options: optionsValidation(options),
  name: requiredValidation(name),
  description: requiredValidation(description),
  photoUrl: requiredValidation(photoUrl),
});

const PopupForm = reduxForm({
  form: 'popupProductForm',
  validate,
  enableReinitialize: true,
})(Popup);

export default PopupForm;
