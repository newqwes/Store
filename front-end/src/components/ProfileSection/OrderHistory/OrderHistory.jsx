import React from 'react';

import { getFormattedDate } from '../../../utils/date';
import { orderHistoryType } from '../../../propType';

import List from './List.jsx';

import { Wrapper } from './styled';
import { CustomLabel } from '../styled';

class OrderHistory extends React.Component {
  static propTypes = {
    orderHistory: orderHistoryType.isRequired,
  };

  render() {
    const { orderHistory } = this.props;

    const list = orderHistory.map(({ date, id, orderData }) => (
      <List key={id} date={getFormattedDate(date)} orderData={orderData} />
    ));

    return (
      <Wrapper>
        <CustomLabel>История заказов</CustomLabel>
        {list}
      </Wrapper>
    );
  }
}

export default OrderHistory;
