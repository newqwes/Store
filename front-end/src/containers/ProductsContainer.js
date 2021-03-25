import { connect } from 'react-redux';

import { getProducts } from '../selectors/product';
import { getEditModeStatus } from '../selectors/admin';
import { getProductsList, addToCart, updateProduct } from '../actionCreators';

import ProductSection from '../components/ProductSection';

const addProduct = payload => ({
  type: 'TODO_ADD_PRODUCT',
  payload,
});

const mapStateToProps = state => ({
  products: getProducts(state),
  editMode: getEditModeStatus(state),
});

const mapDispatchToProps = {
  getProductsList,
  addToCart,
  updateProduct,
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
