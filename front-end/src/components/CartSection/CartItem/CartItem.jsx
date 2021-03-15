import React from 'react';
import { getOr } from 'lodash/fp';
import PropTypes from 'prop-types';

import FONT_SIZE from '../../../constants/fontSize';
import FONT_WEIGHT from '../../../constants/fontWeight';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../../constants/position';

import { cartItemType } from '../../../propType';

import Flex from '../../Flex';
import Label from '../../Label';
import Button from '../../Button';
import ValueFormatter from '../../ValueFormatter';

import {
  CartItemContent,
  CartPhotoContent,
  CartDescriptionContent,
  CartPriceContent,
} from './styled';

const CartItem = ({ item, removeFromCart, addToCart }) => {
  const { photoUrl, name, description, options, unitSign, currencySign, count } = item;

  const price = getOr(0, 'price', options);
  const weight = getOr(0, 'weight', options);

  const addOne = () => addToCart(item);
  const removeOne = () => removeFromCart(item);

  return (
    <CartItemContent>
      <Flex justifyContent={JUSTIFY_CONTENT.spaceBetween} alignItems={ALIGN_ITEMS.stretch}>
        <CartPhotoContent backgroundImage={photoUrl} />
        <CartDescriptionContent>
          <Label text={name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.bold} />
          <Label
            text={`Описание: ${description}`}
            fontSize={FONT_SIZE.small}
            fontWeight={FONT_WEIGHT.normal}
          />
        </CartDescriptionContent>
        <CartPriceContent>
          <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
            <ValueFormatter
              value={weight}
              fontSize={FONT_SIZE.small}
              fontWeight={FONT_WEIGHT.normal}
              postfix={unitSign}
            />
          </Flex>
          <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
            <ValueFormatter
              value={price}
              fontSize={FONT_SIZE.small}
              fontWeight={FONT_WEIGHT.normal}
              postfix={currencySign}
            />
          </Flex>
          <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
            <Button text='-' onClick={removeOne} />
            <Label text={count} fontSize={FONT_SIZE.small} fontWeight={FONT_WEIGHT.normal} />
            <Button text='+' onClick={addOne} />
          </Flex>
        </CartPriceContent>
      </Flex>
    </CartItemContent>
  );
};

CartItem.propTypes = {
  item: cartItemType.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
