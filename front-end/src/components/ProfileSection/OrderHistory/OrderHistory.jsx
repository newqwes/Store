import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedDate } from '../../../utils/date';
import { orderHistoryType } from '../../../propType';

import ListItem from './ListItem.jsx';

import { Wrapper } from './styled';
import { CustomLabel } from '../styled';

class OrderHistory extends React.Component {
  static propTypes = {
    orderHistory: orderHistoryType.isRequired,
    getOrderHistory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getOrderHistory();
  }

  render() {
    const { orderHistory } = this.props;

    const list = orderHistory.map(({ date, id, orderData }) => (
      <ListItem key={id} date={getFormattedDate(date)} orderData={orderData} />
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
