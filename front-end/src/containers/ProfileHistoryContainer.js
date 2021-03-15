import { connect } from 'react-redux';

import { getUserHistory } from '../selectors/userHistory';

import { getHistory } from '../actionCreators';
import UserHistory from '../components/ProfileSection/UserHistory';

const mapStateToProps = state => ({
  history: getUserHistory(state),
});

const mapDispatchToProps = {
  getHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);
