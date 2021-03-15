import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';

import ProfileUserContainer from '../../containers/ProfileUserContainer';
import ProfileAddressContainer from '../../containers/ProfileAddressContainer';
import ProfileHistoryContainer from '../../containers/ProfileHistoryContainer';
import ProfilePasswordContainer from '../../containers/ProfilePasswordContainer';
import ProfileAddProductContainer from '../../containers/ProfileAddProductContainer';

import ProfileMenu from './ProfileMenu';

import { ProfileWrapper, ProfileContent } from './styled';

class ProfileSection extends React.Component {
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
            <Route path={ROUTER_PATH.password} component={ProfilePasswordContainer} />
            <Route path={ROUTER_PATH.profileMenu.user} component={ProfileUserContainer} />
            <Route path={ROUTER_PATH.profileMenu.address} component={ProfileAddressContainer} />
            <Route path={ROUTER_PATH.profileMenu.history} component={ProfileHistoryContainer} />
            {userAdmin && (
              <Route
                path={ROUTER_PATH.profileMenu.addProduct}
                component={ProfileAddProductContainer}
              />
            )}
          </ProfileContent>
        </ProfileWrapper>
      );
    }

    return <Redirect to={ROUTER_PATH.products.pizza} />;
  }
}

export default ProfileSection;
