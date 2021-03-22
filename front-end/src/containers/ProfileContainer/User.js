import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getUserData } from '../../selectors/userInfo';
import { phoneValidation, emailValidation, loginValidation } from '../../utils/fieldValidation';

import UserProfileForm from '../../components/ProfileSection/UserProfileForm';
import { updateUser, deleteUser } from '../../actionCreators';

const validate = ({ phone, email, login }) => ({
  phone: phoneValidation(phone),
  email: emailValidation(email),
  login: loginValidation(login),
});

const withReduxForm = reduxForm({
  form: 'profileUser',
  validate,
  enableReinitialize: true,
});

const mapStateToProps = state => ({
  initialValues: getUserData(state),
});

const mapDispatchToProps = {
  updateUser,
  deleteUser,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(UserProfileForm);
