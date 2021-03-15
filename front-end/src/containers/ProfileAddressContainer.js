import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getUserData } from '../selectors/userInfo';

import { updateUser } from '../actionCreators';
import UserAddressForm from '../components/ProfileSection/UserAddressForm';

const withReduxForm = reduxForm({
  form: 'profileAddress',
  enableReinitialize: true,
});

const mapStateToProps = state => ({
  initialValues: getUserData(state),
});

const mapDispatchToProps = {
  updateUser,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(UserAddressForm);
