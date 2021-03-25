import PropTypes from 'prop-types';

export const optionsType = PropTypes.shape({
  id: PropTypes.number,
  price: PropTypes.number,
  weight: PropTypes.number,
  productId: PropTypes.number,
});

export const productType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  unitSign: PropTypes.string,
  currencySign: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.arrayOf(optionsType), optionsType]),
});

export const productsType = PropTypes.arrayOf(productType);

export const cartItemType = productType;

export const cartType = PropTypes.arrayOf(productType);

export const locationRouterType = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  key: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
});

export const fieldType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
});

export const orderDataItemType = PropTypes.shape({
  id: PropTypes.number,
  orderId: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  unitSign: PropTypes.string,
  currencySign: PropTypes.string,
  price: PropTypes.number,
  weight: PropTypes.number,
  count: PropTypes.number,
});

export const orderDataType = PropTypes.arrayOf(orderDataItemType);

const orderHistoryItemType = PropTypes.shape({
  id: PropTypes.string,
  userId: PropTypes.string,
  date: PropTypes.string,
  orderData: orderDataType,
});

export const orderHistoryType = PropTypes.arrayOf(orderHistoryItemType);

const footerMenuItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  href: PropTypes.string,
});

export const footerMenuType = PropTypes.shape({
  menuTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(footerMenuItemType),
});
