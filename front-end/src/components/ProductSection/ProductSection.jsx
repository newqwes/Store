import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import { productsType, locationRouterType } from '../../propType';

import THEME_VARIANT from '../../constants/themeVariant';

import ProductList from './ProductList';

import { ProductWrapper, ProductContent } from './styled';

class ProductSection extends React.Component {
  static propTypes = {
    products: productsType.isRequired,
    themeVariant: PropTypes.string,
    getProductsList: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    location: locationRouterType.isRequired,
    updateProduct: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    category: '',
    showPopup: false,
  };

  togglePopup = () => this.setState({ showPopup: !this.state.showPopup });

  setQueryTypeToState = () => {
    const { search } = this.props.location;
    const category = new URLSearchParams(search).get('type');

    this.setState({ category });
    this.props.getProductsList(category);
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
    const { products, themeVariant, addToCart, editMode, updateProduct, addProduct } = this.props;
    const { showPopup, category } = this.state;

    return (
      <ProductWrapper themeVariant={themeVariant}>
        <ProductContent>
          <ProductList
            products={products}
            addToCart={addToCart}
            category={category}
            editMode={editMode}
            showPopup={showPopup}
            addProduct={addProduct}
            updateProduct={updateProduct}
            togglePopup={this.togglePopup}
          />
        </ProductContent>
      </ProductWrapper>
    );
  }
}

export default ProductSection;
