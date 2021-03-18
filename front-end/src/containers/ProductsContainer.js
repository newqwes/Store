import { connect } from 'react-redux';

import { getProducts } from '../selectors/product';
import { getEditModeStatus } from '../selectors/admin';
import { getProductsList, addToCart } from '../actionCreators';

import ProductSection from '../components/ProductSection';

const mapStateToProps = state => ({
  products: getProducts(state),
  editMode: getEditModeStatus(state),
});

const updateProduct = payload => ({
  type: 'updateProduct',
  payload,
});

const mapDispatchToProps = {
  getProductsList,
  addToCart,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
