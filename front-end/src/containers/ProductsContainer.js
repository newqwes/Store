import { connect } from 'react-redux';

import { getProducts } from '../selectors/product';
import { getEditModeStatus } from '../selectors/admin';
import { getProductsList, addToCart } from '../actionCreators';

import ProductSection from '../components/ProductSection';

const mapStateToProps = state => ({
  products: getProducts(state),
  editMode: getEditModeStatus(state),
});

const mapDispatchToProps = {
  getProductsList,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
