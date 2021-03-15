import { connect } from 'react-redux';

import CartSection from '../components/CartSection';
import { getCart, getTotalCartPrice } from '../selectors/cart';
import { removeFromCart, addToCart } from '../actionCreators';

const mapStateToProps = state => ({
  cart: getCart(state),
  totalCartPrice: getTotalCartPrice(state),
});

const mapDispatchToProps = { removeFromCart, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartSection);
