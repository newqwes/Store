import { connect } from 'react-redux';
import { isUserAdmin } from '../../selectors/userInfo';
import { getUserAuthStatus } from '../../selectors/authorization';

import { getOrderHistory } from '../../actionCreators';

import ProfileContainer from './ProfileContainer.jsx';

const mapStateToProps = state => ({
  userAuthorized: getUserAuthStatus(state),
  userAdmin: isUserAdmin(state),
});

const mapDispatchToProps = {
  getOrderHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
