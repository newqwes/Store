import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import THEME_VARIANT from '../../constants/themeVariant';

import { ProductWrapper, ProductContent } from './styled';

import ProductList from './ProductList';

import { productsType, locationRouterType } from '../../propType';

class ProductSection extends React.Component {
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

  static propTypes = {
    products: productsType.isRequired,
    themeVariant: PropTypes.string,
    getProductsList: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    location: locationRouterType.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const { products, themeVariant, addToCart } = this.props;

    return (
      <ProductWrapper themeVariant={themeVariant}>
        <ProductContent>
          <ProductList products={products} addToCart={addToCart} />
        </ProductContent>
      </ProductWrapper>
    );
  }
}

export default ProductSection;
