import React from 'react';
import { mountWithTheme } from '../../helpers';

import {
  CartItemContent,
  CartPhotoContent,
  CartDescriptionContent,
  CartPriceContent,
} from '../../../components/CartSection/CartItem/styled';

import CartItem from '../../../components/CartSection/CartItem';
import mockProductItem from '../../helpers/mocks';

const setUp = (props) =>
  mountWithTheme(
    <CartItem addToCart={() => {}} removeFromCart={() => {}} item={mockProductItem} {...props} />
  );

describe('snapshot CartItem', () => {
  test('snapshot', () => {
    const wrapper = setUp();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('CartItem component', () => {
  const mockAddToCart = jest.fn();
  const mockRemoveFromCart = jest.fn();

  const wrapper = setUp({ addToCart: mockAddToCart, removeFromCart: mockRemoveFromCart });

  it(`should render CartItem with following children:
  - 1 CartPhotoContent,
  - 1 CartItemContent,
  - 1 CartDescriptionContent,
  - 1 CartPriceContent,
  - 4 Flex,
  - 3 Label,
  - 2 ValueFormatter,
  - 2 Button`, () => {
    const photoContent = wrapper.find(CartPhotoContent);
    expect(photoContent.length).toBe(1);

    const itemContent = wrapper.find(CartItemContent);
    expect(itemContent.length).toBe(1);

    const descriptionContent = wrapper.find(CartDescriptionContent);
    expect(descriptionContent.length).toBe(1);

    const priceContent = wrapper.find(CartPriceContent);
    expect(priceContent.length).toBe(1);

    const flexs = wrapper.find('Flex');
    expect(flexs.length).toBe(4);

    const labels = wrapper.find('Label');
    expect(labels.length).toBe(3);

    const valueFormatters = wrapper.find('ValueFormatter');
    expect(valueFormatters.length).toBe(2);

    const buttons = wrapper.find('Button');
    expect(buttons.length).toBe(2);
  });
});
