import React, { Fragment } from 'react';
import find from 'lodash/find';
import PropTypes from 'prop-types';
import { getOr, first, toNumber } from 'lodash/fp';

import { productType } from '../../propType';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';

import Image from '../Image';
import Label from '../Label';
import Flex from '../Flex';
import Pen from '../Icons/Pen';
import Rubbish from '../Icons/Rubbish';
import Select from '../Select';
import Button from '../Button';
import ValueFormatter from '../ValueFormatter';
import PopupForm from '../ProductSection/PopupForm';

import { CardWrapper, CardContent, Description, RubbishWrapper, PenWrapper } from './styled';

class Card extends React.Component {
  static propTypes = {
    item: productType.isRequired,
    themeVariant: PropTypes.string,
    userAdmin: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  getOptions = () => getOr([], ['item', 'options'], this.props);

  state = {
    option: first(this.getOptions()),
    showPopup: false,
  };

  findByWeight = value => {
    const options = this.getOptions();
    return find(options, ['weight', toNumber(value)]);
  };

  handleChange = ({ target }) => {
    const option = this.findByWeight(target.value);
    this.setState({ option });
  };

  addToCart = () => {
    const { addToCart, item } = this.props;
    const { option } = this.state;

    return addToCart({ ...item, options: option });
  };

  togglePopup = () => this.setState({ showPopup: !this.state.showPopup });

  deleteItem = () => {
    const {
      deleteProduct,
      item: { id, type },
    } = this.props;

    deleteProduct({ id, type });
  };

  render() {
    const { option, showPopup } = this.state;
    const {
      themeVariant,
      updateProduct,
      userAdmin,
      item: { photoUrl, name, description, currencySign, options, unitSign },
    } = this.props;

    return (
      <CardWrapper themeVariant={themeVariant}>
        <Image src={photoUrl} alt={name} />
        <CardContent themeVariant={themeVariant}>
          <Label text={name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.normal} />
          <Description fontSize={FONT_SIZE.least} fontWeight={FONT_WEIGHT.normal}>
            {description}
          </Description>
          <Flex>
            <ValueFormatter
              value={option.price}
              textAlign={TEXT_ALIGN.center}
              fontWeight={FONT_WEIGHT.normal}
              postfix={currencySign}
            />
            <Select options={options} onChange={this.handleChange} unitSign={unitSign} />
            <Button text='Выбрать' onClick={this.addToCart} />
          </Flex>
        </CardContent>

        {userAdmin && (
          <Fragment>
            <PenWrapper onClick={this.togglePopup}>
              <Pen />
            </PenWrapper>
            <RubbishWrapper onClick={this.deleteItem}>
              <Rubbish />
            </RubbishWrapper>
          </Fragment>
        )}

        {showPopup && (
          <PopupForm
            label='Изменить'
            initialValues={this.props.item}
            closePopup={this.togglePopup}
            submitProduct={updateProduct}
          />
        )}
      </CardWrapper>
    );
  }
}

export default Card;
