import React from 'react';
import PropTypes from 'prop-types';

import { productsType } from '../../../propType';

import Card from '../../Card';

import ProductListWrapper from './styled';

const ProductList = ({ products, addToCart }) => {
  const goods = products.map((product) => (
    <Card addToCart={addToCart} key={product.id} item={product} />
  ));

  return <ProductListWrapper>{goods}</ProductListWrapper>;
};

ProductList.propTypes = {
  products: productsType.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
