import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';

import { isUserAdmin } from '../../selectors/userInfo';
import { getUserAuthStatus } from '../../selectors/authorization';

import User from './User';
import Address from './Address';
import OrderHistory from './OrderHistory';
import AddProduct from './AddProduct';
import Password from './Password';

import ProfileMenu from '../../components/ProfileSection/ProfileMenu';

import { ProfileWrapper, ProfileContent } from './styled';

class ProfileContainer extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    userAuthorized: PropTypes.bool.isRequired,
    userAdmin: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    menuActive: true,
  };

  clickButtonMenu = () => this.setState({ menuActive: !this.state.menuActive });

  render() {
    const { themeVariant, userAuthorized, userAdmin } = this.props;
    const { menuActive } = this.state;

    if (userAuthorized) {
      return (
        <ProfileWrapper themeVariant={themeVariant}>
          <ProfileMenu
            active={menuActive}
            clickButtonMenu={this.clickButtonMenu}
            userAdmin={userAdmin}
          />
          <ProfileContent>
            <Route path={ROUTER_PATH.profileMenu.user} component={User} />
            <Route path={ROUTER_PATH.profileMenu.address} component={Address} />
            <Route path={ROUTER_PATH.profileMenu.history} component={OrderHistory} />
            <Route path={ROUTER_PATH.password} component={Password} />
            {userAdmin && (
              <Route path={ROUTER_PATH.profileMenu.addProduct} component={AddProduct} />
            )}
          </ProfileContent>
        </ProfileWrapper>
      );
    }

    return <Redirect to={ROUTER_PATH.products.pizza} />;
  }
}

const mapStateToProps = state => ({
  userAuthorized: getUserAuthStatus(state),
  userAdmin: isUserAdmin(state),
});

export default connect(mapStateToProps)(ProfileContainer);
