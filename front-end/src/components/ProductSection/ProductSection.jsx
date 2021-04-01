import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import { productsType, locationRouterType } from '../../propType';

import THEME_VARIANT from '../../constants/themeVariant';

import ProductList from './ProductList';

import { ProductWrapper, ProductContent } from './styled';

class ProductSection extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    userAdmin: PropTypes.bool.isRequired,
    products: productsType.isRequired,
    getProductsList: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    location: locationRouterType.isRequired,
    updateProduct: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    showPopup: false,
  };

  togglePopup = () => this.setState({ showPopup: !this.state.showPopup });

  setQueryTypeToState = () => {
    const { search } = this.props.location;
    const type = new URLSearchParams(search).get('type');

    this.props.getProductsList(type);
  };

  componentDidMount() {
    this.setQueryTypeToState();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.location, prevProps.location)) {
      this.setQueryTypeToState();
    }
  }

  render() {
    const {
      products,
      themeVariant,
      addToCart,
      updateProduct,
      addProduct,
      deleteProduct,
      userAdmin,
    } = this.props;
    const { showPopup } = this.state;

    return (
      <ProductWrapper themeVariant={themeVariant}>
        <ProductContent>
          <ProductList
            products={products}
            addToCart={addToCart}
            showPopup={showPopup}
            userAdmin={userAdmin}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
            togglePopup={this.togglePopup}
          />
        </ProductContent>
      </ProductWrapper>
    );
  }
}

export default ProductSection;
