import { connect } from 'react-redux';

import { getProducts } from '../selectors/product';
import { isUserAdmin } from '../selectors/userInfo';
import {
  getProductsList,
  addToCart,
  updateProduct,
  addProduct,
  deleteProduct,
} from '../actionCreators';

import ProductSection from '../components/ProductSection';

const mapStateToProps = state => ({
  products: getProducts(state),
  userAdmin: isUserAdmin(state),
});

const mapDispatchToProps = {
  getProductsList,
  addToCart,
  updateProduct,
  addProduct,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
