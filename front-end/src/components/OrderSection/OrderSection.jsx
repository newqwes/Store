import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash/fp';

import { productsType } from '../../propType';

import DIRECTION from '../../constants/direction';
import ROUTER_PATH from '../../constants/routerPath';
import { ALIGN_ITEMS } from '../../constants/position';
import ORDER_FIELDS from '../../constants/orderFields';
import THEME_VARIANT from '../../constants/themeVariant';

import Flex from '../Flex';
import Label from '../Label';
import Button from '../Button';
import FieldList from '../FieldList';
import InputField from '../InputField';
import TotalPrice from '../TotalPrice';
import CartItems from '../CartSection/CartItems';

import {
  OrderSectionWrapper,
  OrderSectionContent,
  InputFieldContent,
  OrderInfoWrapper,
} from './styled';

const OrderSection = ({
  totalCartPrice,
  cart,
  addToCart,
  submitOrder,
  handleSubmit,
  themeVariant,
  removeFromCart,
  currencySign,
}) => {
  const history = useHistory();

  const submit = customer => {
    if (isEmpty(cart)) return;

    submitOrder({ cart, customer });
    history.push(ROUTER_PATH.orderSuccessMessage);
  };

  return (
    <OrderSectionWrapper themeVariant={themeVariant}>
      <OrderSectionContent themeVariant={themeVariant}>
        <Flex direction={DIRECTION.column} flexBasis='60%' alignItems={ALIGN_ITEMS.flexStart}>
          <Label text='Оформление заказа' />
          <form>
            <Flex direction={DIRECTION.column}>
              <FieldList
                fields={ORDER_FIELDS}
                component={InputField}
                fieldStyle={InputFieldContent}
              />
              <Button text='Отправить' onClick={handleSubmit(submit)} />
            </Flex>
          </form>
        </Flex>
        <Flex direction={DIRECTION.column} flexBasis='40%' alignItems={ALIGN_ITEMS.flexStart}>
          <Label text='Ваш заказ' />
          <OrderInfoWrapper>
            <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
            <TotalPrice value={totalCartPrice} currencySign={currencySign} label='Сумма заказа: ' />
          </OrderInfoWrapper>
        </Flex>
      </OrderSectionContent>
    </OrderSectionWrapper>
  );
};

OrderSection.propTypes = {
  cart: productsType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  totalCartPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  currencySign: PropTypes.string.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
