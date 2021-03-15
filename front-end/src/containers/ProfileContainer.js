import { connect } from 'react-redux';

import ProfileSection from '../components/ProfileSection';
import { getUserAuthStatus } from '../selectors/authorization';
import { isUserAdmin } from '../selectors/userInfo';

const mapStateToProps = state => ({
  userAuthorized: getUserAuthStatus(state),
  userAdmin: isUserAdmin(state),
});

export default connect(mapStateToProps)(ProfileSection);
