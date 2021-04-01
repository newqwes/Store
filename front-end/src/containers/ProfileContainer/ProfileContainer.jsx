import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';

import User from './User';
import Address from './Address';
import OrderHistory from './OrderHistory';
import Password from './Password';

import ProfileMenu from '../../components/ProfileSection/ProfileMenu';

import { ProfileWrapper, ProfileContent } from './styled';

class ProfileContainer extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    userAuthorized: PropTypes.bool.isRequired,
    getOrderHistory: PropTypes.func.isRequired,
    userAdmin: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  componentDidMount() {
    this.props.getOrderHistory();
  }

  state = {
    menuActive: true,
  };

  clickButtonMenu = () => this.setState({ menuActive: !this.state.menuActive });

  render() {
    const { themeVariant, userAuthorized } = this.props;
    const { menuActive } = this.state;

    if (userAuthorized) {
      return (
        <ProfileWrapper themeVariant={themeVariant}>
          <ProfileMenu active={menuActive} clickButtonMenu={this.clickButtonMenu} />
          <ProfileContent>
            <Route path={ROUTER_PATH.profileMenu.user} component={User} />
            <Route path={ROUTER_PATH.profileMenu.address} component={Address} />
            <Route path={ROUTER_PATH.profileMenu.history} component={OrderHistory} />
            <Route path={ROUTER_PATH.password} component={Password} />
          </ProfileContent>
        </ProfileWrapper>
      );
    }

    return <Redirect to={ROUTER_PATH.products.pizza} />;
  }
}

export default ProfileContainer;
