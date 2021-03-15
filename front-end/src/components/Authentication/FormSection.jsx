import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

import contentType from './propTypes';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Label from '../Label';
import Button from '../Button';
import FieldList from '../FieldList';
import InputField from '../InputField';

import { FormWrapper, FormContent, InputFieldContent } from './styled';

class FormSection extends React.Component {
  state = {
    isErrorAnimation: false,
  };

  onAnimationEnd = () => this.setState({ isErrorAnimation: false });

  handleClick = () => this.setState({ isErrorAnimation: true });

  static propTypes = {
    themeVariant: PropTypes.string,
    submit: PropTypes.func.isRequired,
    userAuthorized: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    content: PropTypes.shape(contentType),
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const {
      themeVariant,
      submit,
      handleSubmit,
      userAuthorized,
      content: { title, buttonText, link, fields },
    } = this.props;
    const { isErrorAnimation } = this.state;

    if (userAuthorized) return <Redirect to={ROUTER_PATH.products.pizza} />;

    return (
      <FormWrapper themeVariant={themeVariant}>
        <Flex alignItems={ALIGN_ITEMS.center}>
          <FormContent
            themeVariant={themeVariant}
            isErrorAnimation={isErrorAnimation}
            onAnimationEnd={this.onAnimationEnd}>
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Label text={title} />
            </Flex>
            <form onSubmit={handleSubmit(submit)}>
              <FieldList fieldStyle={InputFieldContent} fields={fields} component={InputField} />
              <Button text={buttonText} onClick={this.handleClick} />
              <Flex justifyContent={JUSTIFY_CONTENT.center}>
                <NavLink to={link.route}>{link.text}</NavLink>
              </Flex>
            </form>
          </FormContent>
        </Flex>
      </FormWrapper>
    );
  }
}

export default FormSection;
