import React from 'react';

import { mountWithTheme } from '../../helpers';
import { mockProductItem } from '../../helpers/mocks';

import { CardWrapper, CardContent, Description } from '../../../components/Card/styled';

import Card from '../../../components/Card';

const setUp = props =>
  mountWithTheme(
    <Card
      item={mockProductItem}
      userAdmin={true}
      addToCart={() => {}}
      updateProduct={() => {}}
      {...props}
    />,
  );

describe('snapshot Card', () => {
  test('snapshot', () => {
    const wrapper = setUp();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Card component', () => {
  const mockAddToCart = jest.fn();
  const mockupdateProduct = jest.fn();

  const wrapper = setUp({
    addToCart: mockAddToCart,
    updateProduct: mockupdateProduct,
  });

  it(`should render Card with following children:
  - 1 CardWrapper,
  - 1 CardContent,
  - 1 Flex,
  - 1 Label,
  - 1 Description,
  - 1 ValueFormatter,
  - 1 Select,
  - 1 Button,
  - 0 Pen`, () => {
    const cardWrapper = wrapper.find(CardWrapper);
    expect(cardWrapper.length).toBe(1);

    const cardContent = wrapper.find(CardContent);
    expect(cardContent.length).toBe(1);

    const description = wrapper.find(Description);
    expect(description.length).toBe(1);

    const flexs = wrapper.find('Flex');
    expect(flexs.length).toBe(1);

    const labels = wrapper.find('Label');
    expect(labels.length).toBe(1);

    const buttons = wrapper.find('Button');
    expect(buttons.length).toBe(1);

    const valueFormatter = wrapper.find('ValueFormatter');
    expect(valueFormatter.length).toBe(1);

    const select = wrapper.find('Select');
    expect(select.length).toBe(1);

    const pen = wrapper.find('Pen');
    expect(pen.length).toBe(0);
  });

  it('should be call addToCart when click button', () => {
    const buttons = wrapper.find('Button');
    buttons.simulate('click');

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
