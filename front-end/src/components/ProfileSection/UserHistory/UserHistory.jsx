import React from 'react';
import PropTypes from 'prop-types';

import { getDateFormat } from '../../../utils/date';
import { historyType } from '../../../propType';

import HistoryList from './HistoryList.jsx';

import { UserHistoryWrapper, UserHistoryItem } from './styled';
import { CustomLabel } from '../styled';

class UserHistory extends React.Component {
  static propTypes = {
    history: historyType.isRequired,
    getHistory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getHistory();
  }

  render() {
    const { history } = this.props;

    const userHistory = history.map(({ date, id, orderStore }) => (
      <UserHistoryItem key={id}>
        <h3>{getDateFormat(date)}</h3>
        <HistoryList historyStore={orderStore} />
      </UserHistoryItem>
    ));

    return (
      <UserHistoryWrapper>
        <CustomLabel>История заказов</CustomLabel>
        <div>{userHistory}</div>
      </UserHistoryWrapper>
    );
  }
}

export default UserHistory;
