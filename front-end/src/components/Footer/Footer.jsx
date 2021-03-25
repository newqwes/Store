import React from 'react';
import PropTypes from 'prop-types';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import MenuList from './MenuList.jsx';

import FooterWrapper from './styled';

const { aboutUs, work, partners, interesting, contacts } = ROUTER_PATH.footerNavbar;

const Footer = ({ themeVariant }) => (
  <FooterWrapper themeVariant={themeVariant}>
    <Flex
      flexBasis='70%'
      alignItems={ALIGN_ITEMS.flexStart}
      justifyContent={JUSTIFY_CONTENT.spaceBetween}
    >
      <MenuList menu={aboutUs} />
      <MenuList menu={work} />
      <MenuList menu={partners} />
      <MenuList menu={interesting} />
    </Flex>
    <Flex alignItems={ALIGN_ITEMS.flexStart}>
      <MenuList menu={contacts} alignItems={ALIGN_ITEMS.flexEnd} />
    </Flex>
  </FooterWrapper>
);

Footer.propTypes = {
  themeVariant: PropTypes.string,
};

Footer.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Footer;
