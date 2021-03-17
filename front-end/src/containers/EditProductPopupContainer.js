import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { optionsValidation, requiredValidation } from '../utils/fieldValidation';

import EditProductPopup from '../components/EditProductPopup';

const updateProduct = payload => ({
  type: 'updateProduct',
  payload,
});

const validate = ({ name, description, photoUrl, options }) => ({
  options: optionsValidation(options),
  name: requiredValidation(name),
  description: requiredValidation(description),
  photoUrl: requiredValidation(photoUrl),
});

const withReduxForm = reduxForm({
  form: 'updateProduct',
  validate,
  enableReinitialize: true,
});

const mapDispatchToProps = {
  updateProduct,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(EditProductPopup);
