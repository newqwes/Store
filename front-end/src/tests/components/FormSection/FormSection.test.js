import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { mountWithTheme } from '../../helpers';
import { mockAuthenticationForm } from '../../helpers/mocks';

import {
  FormWrapper,
  FormContent,
  InputFieldContent,
} from '../../../components/Authentication/styled';

import FormSection from '../../../components/Authentication';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

const FormSectionWithReduxForm = reduxForm({
  form: 'login',
})(FormSection);

const setUp = props =>
  mountWithTheme(
    <Router>
      <Provider store={store}>
        <FormSectionWithReduxForm
          content={mockAuthenticationForm}
          submit={() => {}}
          handleSubmit={() => {}}
          userAuthorized={false}
          {...props}
        />
      </Provider>
    </Router>,
  );

describe('snapshot FormSection', () => {
  test('snapshot', () => {
    const wrapper = setUp();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('FormSection component', () => {
  const mockSubmit = jest.fn();
  const mockHandleSubmit = jest.fn();

  const wrapper = setUp({ submit: mockSubmit, handleSubmit: mockHandleSubmit });

  it(`should render FormSection with following children:
  - 1 FormWrapper,
  - 1 FormContent,
  - 2 InputFieldContent,
  - 3 Flex,
  - 1 Label,
  - 1 NavLink,
  - 1 form,
  - 2 Button`, () => {
    const formWrapper = wrapper.find(FormWrapper);
    expect(formWrapper.length).toBe(1);

    const formContent = wrapper.find(FormContent);
    expect(formContent.length).toBe(1);

    const inputFieldContent = wrapper.find(InputFieldContent);
    expect(inputFieldContent.length).toBe(2);

    const flexs = wrapper.find('Flex');
    expect(flexs.length).toBe(3);

    const labels = wrapper.find('Label');
    expect(labels.length).toBe(1);

    const buttons = wrapper.find('Button');
    expect(buttons.length).toBe(1);

    const form = wrapper.find('form');
    expect(form.length).toBe(1);

    const navLink = wrapper.find('NavLink');
    expect(navLink.length).toBe(1);
  });

  it('should be animation when click submit', () => {
    const formSection = wrapper.find('FormSection');
    const buttons = wrapper.find('Button');

    buttons.simulate('click');
    expect(formSection.state()).toEqual({ isErrorAnimation: true });
  });

  it('should be submit when click button', () => {
    const buttons = wrapper.find('Button');
    buttons.simulate('click');

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should end animation when call onAnimationEnd', () => {
    const formSection = wrapper.find('FormSection');
    const buttons = wrapper.find('Button');

    buttons.simulate('click');
    formSection.instance().onAnimationEnd();
    expect(formSection.state()).toEqual({ isErrorAnimation: false });
  });

  it('should redirect when user authorized', () => {
    const formWrapper = setUp({ userAuthorized: true }).find(FormWrapper);
    expect(formWrapper.length).toBe(0);
  });
});
