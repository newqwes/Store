import { connect } from 'react-redux';

import { getOrderHistoryFromState } from '../../selectors/orderHistory';

import { getOrderHistory } from '../../actionCreators';
import OrderHistory from '../../components/ProfileSection/OrderHistory';

const mapStateToProps = state => ({
  orderHistory: getOrderHistoryFromState(state),
});

const mapDispatchToProps = {
  getOrderHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
