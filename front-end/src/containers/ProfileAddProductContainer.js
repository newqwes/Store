import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { requiredValidation, optionsValidation } from '../utils/fieldValidation';

import { addProduct } from '../actionCreators';
import ProfileAddProductForm from '../components/ProfileSection/ProfileAddProductForm';

const validate = ({ name, description, photoUrl, options }) => ({
  name: requiredValidation(name),
  description: requiredValidation(description),
  photoUrl: requiredValidation(photoUrl),
  options: optionsValidation(options),
});

const withReduxForm = reduxForm({
  form: 'addProduct',
  validate,
});

const mapDispatchToProps = {
  addProduct,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(ProfileAddProductForm);
