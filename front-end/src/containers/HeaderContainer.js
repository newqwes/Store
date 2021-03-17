import { connect } from 'react-redux';

import { logout, setEditMode } from '../actionCreators';
import { getUserAuthStatus } from '../selectors/authorization';
import { getCartItemsCount } from '../selectors/cart';
import { getUserName, isUserAdmin } from '../selectors/userInfo';
import { getEditModeStatus } from '../selectors/admin';

import Header from '../components/Header';

const mapStateToProps = state => ({
  cartItemsCount: getCartItemsCount(state),
  userAuthorized: getUserAuthStatus(state),
  userName: getUserName(state),
  userAdmin: isUserAdmin(state),
  editMode: getEditModeStatus(state),
});

const mapDispatchToProps = {
  logout,
  setEditMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
