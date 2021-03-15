import React from 'react';
import { shallow } from 'enzyme';

import Image from '../../components/Image';

describe('Image component', () => {
  it('renders the mocked src and alt', () => {
    const src = 'https://images.dominos.by/media/dominos/osg/api/2020/11/18/chiken_fresh_small.png';
    const alt = 'Овощная';

    const wrapper = shallow(<Image src={src} alt={alt} />);

    expect(wrapper.find('img').props().src).toBe(src);
    expect(wrapper.find('img').props().alt).toBe(alt);
  });

  it('renders with empty string src and alt', () => {
    const src = '';
    const alt = '';

    const wrapper = shallow(<Image src={src} alt={alt} />);

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.contains(<img src='' alt='' />)).toBe(true);
  });
});
