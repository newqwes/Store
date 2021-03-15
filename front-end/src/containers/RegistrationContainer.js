import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { registration } from '../actionCreators';

import FormSection from '../components/Authentication';
import {
  phoneValidation,
  emailValidation,
  loginValidation,
  equalValidation,
  passwordValidation,
} from '../utils/fieldValidation';
import { getUserAuthStatus } from '../selectors/authorization';

const validate = ({ phone, email, login, password, confirmPassword }) => ({
  phone: phoneValidation(phone),
  email: emailValidation(email),
  login: loginValidation(login),
  password: passwordValidation(password),
  confirmPassword: equalValidation({ value: password, other: confirmPassword }),
});

const withReduxForm = reduxForm({
  form: 'registration',
  validate,
});

const mapStateToProps = state => ({
  userAuthorized: getUserAuthStatus(state),
});

const mapDispatchToProps = {
  submit: registration,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(FormSection);
