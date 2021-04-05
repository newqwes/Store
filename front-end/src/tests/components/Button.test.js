import React from 'react';

import Button from '../../components/Button';
import { mountWithTheme } from '../helpers';

const initProps = {
  text: 'test text',
  onClick: () => {},
};

const setUp = (props) => mountWithTheme(<Button {...props} />);

describe('snapshot Button', () => {
  let component;

  beforeEach(() => {
    component = setUp(initProps);
  });

  it('snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('should render Button component', () => {
  let component;

  beforeEach(() => {
    component = setUp(initProps);
  });

  it('should contain text in button', () => {
    const button = component;

    expect(button.text()).toBe(initProps.text);
  });

  it('should contain only one button tag', () => {
    const wrapper = component.length;

    expect(wrapper).toBe(1);
  });
});
