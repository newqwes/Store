import React from 'react';
import PropTypes from 'prop-types';
import { pickAll, head, compose } from 'lodash/fp';

import { productsType } from '../../../propType';

import Card, { AddCard } from '../../Card';
import PopupForm from '../PopupForm';

import ProductListWrapper from './styled';

const ProductList = ({
  products,
  addToCart,
  updateProduct,
  addProduct,
  deleteProduct,
  togglePopup,
  showPopup,
  userAdmin,
}) => {
  const goods = products.map(product => (
    <Card
      addToCart={addToCart}
      key={product.id}
      item={product}
      updateProduct={updateProduct}
      deleteProduct={deleteProduct}
      userAdmin={userAdmin}
    />
  ));

  const initialValues = compose(pickAll(['unitSign', 'currencySign', 'type']), head)(products);

  return (
    <ProductListWrapper>
      {goods}
      {userAdmin && <AddCard togglePopup={togglePopup} />}
      {showPopup && (
        <PopupForm
          label='Добавить'
          initialValues={initialValues}
          closePopup={togglePopup}
          submitProduct={addProduct}
        />
      )}
    </ProductListWrapper>
  );
};

ProductList.propTypes = {
  products: productsType.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  userAdmin: PropTypes.bool.isRequired,
};

export default ProductList;
