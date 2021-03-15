import React from 'react';
import PropTypes from 'prop-types';

import { cartType } from '../../../propType';

import CartItem from '../CartItem';

import CartItemsWrapper from './styled';

const CartItems = ({ cart, removeFromCart, addToCart }) => {
  const goods = cart.map((item) => (
    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} addToCart={addToCart} />
  ));

  return <CartItemsWrapper>{goods}</CartItemsWrapper>;
};

CartItems.propTypes = {
  cart: cartType.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItems;
