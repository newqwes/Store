import React from 'react';
import { shallow } from 'enzyme';

import Label from '../../components/Label';

describe('Label component', () => {
  it('component should display text', () => {
    const text = 'test text';

    const wrapper = shallow(<Label text={text}/>);

    expect(wrapper.text()).toBe(text);
  });
});
