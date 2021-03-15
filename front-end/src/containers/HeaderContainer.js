import { connect } from 'react-redux';

import { logout } from '../actionCreators';
import { getUserAuthStatus } from '../selectors/authorization';
import { getCartItemsCount } from '../selectors/cart';
import { getUserName } from '../selectors/userInfo';

import Header from '../components/Header';

const mapStateToProps = state => ({
  cartItemsCount: getCartItemsCount(state),
  userAuthorized: getUserAuthStatus(state),
  userName: getUserName(state),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
