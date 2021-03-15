import React from 'react';
import PropTypes from 'prop-types';

import DIRECTION from '../../constants/direction';
import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';

import Flex from '../Flex';
import Link from '../Link';
import MenuList from './MenuList.jsx';

import FooterWrapper from './styled';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../constants/position';

const { aboutUs, work, partners, interesting } = ROUTER_PATH.footerNavbar;

const Footer = ({ themeVariant }) => (
  <FooterWrapper themeVariant={themeVariant}>
    <Flex
      flexBasis='70%'
      alignItems={ALIGN_ITEMS.flexStart}
      justifyContent={JUSTIFY_CONTENT.spaceBetween}>
      <MenuList menuItems={aboutUs} menuTitle='Магазин Пиццы' />
      <MenuList menuItems={work} menuTitle='Работа' />
      <MenuList menuItems={partners} menuTitle='Партнерам' />
      <MenuList menuItems={interesting} menuTitle='Это интересно' />
    </Flex>
    <Flex direction={DIRECTION.column} alignItems={ALIGN_ITEMS.flexEnd}>
      <span>Связаться с нами</span>
      <Link themeVariant={THEME_VARIANT.inverted} href='tel:+375333637970'>
        +375 (33) 363-79-70
      </Link>
      <Link themeVariant={THEME_VARIANT.inverted} href='mailto:pizzastore@mail.ru'>
        pizzastore@mail.ru
      </Link>
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
