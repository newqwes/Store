import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { emailValidation, passwordValidation } from '../utils/fieldValidation';
import { getUserAuthStatus } from '../selectors/authorization';

import { login } from '../actionCreators';

import FormSection from '../components/Authentication';

const validate = ({ email, password }) => ({
  email: emailValidation(email),
  password: passwordValidation(password),
});

const withReduxForm = reduxForm({
  form: 'login',
  validate,
});

const mapStateToProps = state => ({
  userAuthorized: getUserAuthStatus(state),
});

const mapDispatchToProps = {
  submit: login,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReduxForm, withConnect)(FormSection);
