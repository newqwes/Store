import React from 'react';
import PropTypes from 'prop-types';

import { getDateFormat } from '../../../utils/date';
import { historyType } from '../../../propType';

import FONT_SIZE from '../../../constants/fontSize';
import FONT_WEIGHT from '../../../constants/fontWeight';

import Label from '../../Label';
import HistoryList from './HistoryList.jsx';

import { UserHistoryWrapper, UserHistoryItem } from './styled';

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
        <Label text='История заказов' fontSize={FONT_SIZE.large} fontWeight={FONT_WEIGHT.bold} />
        <div>{userHistory}</div>
      </UserHistoryWrapper>
    );
  }
}

export default UserHistory;
