import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { passwordValidation, equalValidation } from '../../utils/fieldValidation';

import { updateUser } from '../../actionCreators';
import PasswordForm from '../../components/ProfileSection/PasswordForm';

const validate = ({ password, confirmPassword }) => ({
  password: passwordValidation(password),
  confirmPassword: equalValidation({ value: password, other: confirmPassword }),
});

const withReduxForm = reduxForm({
  form: 'passwordUser',
  validate,
});

const mapDispatchToProps = {
  updateUser,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(PasswordForm);
