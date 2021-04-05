import React from 'react';
import { mountWithTheme } from '../../helpers';

import ProductList from '../../../components/ProductSection/ProductList';
import mockProductItem from '../../helpers/mocks';

const setUp = (props) =>
  mountWithTheme(<ProductList products={[mockProductItem]} addToCart={() => {}} {...props} />);

describe('snapshot ProductList', () => {
  const component = setUp();

  it('snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('ProductList component', () => {
  const component = setUp();

  it('should render 1 product', () => {
    const card = component.find('Card');

    expect(card).toHaveLength(1);
  });

  it('should render weight then unitSign', () => {
    const option = component.find('option');
    const text = '250 г';

    expect(option.text()).toBe(text);
  });
});
