import React from 'react';
import { shallow } from 'enzyme';

import ValueFormatter from '../../components/ValueFormatter';

describe('Value Formatter component', () => {
  const value = 1234;
  it('should display price', () => {
    const wrapper = shallow(<ValueFormatter value={value} />);

    expect(wrapper.text()).toBe(String(value));
  });

  it('should display price with prefix and postfix', () => {
    const prefix = '$';
    const postfix = 'h';

    const wrapper = shallow(<ValueFormatter prefix={prefix} postfix={postfix} value={value} />);

    expect(wrapper.text()).toBe(String(prefix + value + postfix));
  });
});
