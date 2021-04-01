import { connect } from 'react-redux';
import { getUserAuthStatus } from '../../selectors/authorization';

import { getOrderHistory } from '../../actionCreators';

import ProfileContainer from './ProfileContainer.jsx';

const mapStateToProps = state => ({
  userAuthorized: getUserAuthStatus(state),
});

const mapDispatchToProps = {
  getOrderHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
