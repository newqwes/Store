import React from 'react';
import PropTypes from 'prop-types';

import { productsType } from '../../../propType';

import Card from '../../Card';
import PopupForm from '../PopupForm';

import ProductListWrapper from './styled';

const ProductList = ({
  products,
  addToCart,
  editMode,
  updateProduct,
  addProduct,
  togglePopup,
  showPopup,
  category,
}) => {
  const goods = products.map(product => (
    <Card
      addToCart={addToCart}
      editMode={editMode}
      key={product.id}
      item={product}
      updateProduct={updateProduct}
      addProduct={addProduct}
      category={category}
    />
  ));

  return (
    <ProductListWrapper>
      {goods}
      {editMode && <button onClick={togglePopup}>+</button>}
      {showPopup && (
        <PopupForm
          popupTitle='Добавить продукт'
          closePopup={togglePopup}
          submitProduct={addProduct}
          category={category}
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
  editMode: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductList;
