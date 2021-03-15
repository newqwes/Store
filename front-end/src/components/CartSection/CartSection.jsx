import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { get, compose, head } from 'lodash/fp';

import { cartType } from '../../propType';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Button from '../Button';
import CartItems from './CartItems';
import TotalPrice from '../TotalPrice';

import { CartSectionWrapper, TotalPriceContent, CartSectionContent } from './styled';

const CartSection = ({ themeVariant, cart, removeFromCart, addToCart, totalCartPrice }) => {
  const history = useHistory();

  const redirectToOrder = () => {
    history.push(ROUTER_PATH.order);
  };

  const currencySign = compose(get('currencySign'), head)(cart);

  return (
    <CartSectionWrapper themeVariant={themeVariant}>
      <CartSectionContent>
        <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
      </CartSectionContent>
      <TotalPriceContent>
        <TotalPrice value={totalCartPrice} currencySign={currencySign} label='Сумма заказа: ' />
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Button text='Оформить заказ' onClick={redirectToOrder} />
        </Flex>
      </TotalPriceContent>
    </CartSectionWrapper>
  );
};

CartSection.propTypes = {
  cart: cartType.isRequired,
  totalCartPrice: PropTypes.number.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

CartSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default CartSection;
