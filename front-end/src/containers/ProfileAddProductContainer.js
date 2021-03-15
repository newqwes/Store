import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { passwordValidation, equalValidation } from '../utils/fieldValidation';

import ProfileAddProductForm from '../components/ProfileSection/ProfileAddProductForm';

const validate = ({ password, confirmPassword }) => ({
  password: passwordValidation(password),
  confirmPassword: equalValidation({ value: password, other: confirmPassword }),
});

const withReduxForm = reduxForm({
  form: 'addProduct',
  validate,
});

const mapDispatchToProps = {};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(ProfileAddProductForm);
