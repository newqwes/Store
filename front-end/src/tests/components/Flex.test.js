import React from 'react';
import { shallow } from 'enzyme';

import Flex from '../../components/Flex';

describe('Flex component', () => {
  it('component should display text', () => {
    const children = 'test text';

    const wrapper = shallow(<Flex>{children}</Flex>);

    expect(wrapper.text()).toBe(children);
  });
});
