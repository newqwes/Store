import { connect } from 'react-redux';

import { getOrderHistory } from '../../selectors/orderHistory';

import OrderHistory from '../../components/ProfileSection/OrderHistory';

const mapStateToProps = state => ({
  orderHistory: getOrderHistory(state),
});

export default connect(mapStateToProps)(OrderHistory);
