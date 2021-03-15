import React from 'react';

import Flex from '../Flex';
import Label from '../Label';

import OrderMessageWrapper from './styled';

const OrderMessageSection = () => (
  <OrderMessageWrapper>
    <Flex>
      <Label text='Ваш заказ подтвержден. Копия заказа отправленна Вам на почту. Ожидайте звонка.' />
    </Flex>
  </OrderMessageWrapper>
);

export default OrderMessageSection;
