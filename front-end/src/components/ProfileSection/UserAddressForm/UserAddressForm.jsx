import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { YMaps, Map } from 'react-yandex-maps';

import Flex from '../../Flex';
import Label from '../../Label';
import InputField from '../../InputField';

import FONT_SIZE from '../../../constants/fontSize';
import DIRECTION from '../../../constants/direction';
import FONT_WEIGHT from '../../../constants/fontWeight';

import { InputFieldContent } from '../styled';

class UserAddressForm extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render() {
    const { updateUser, handleSubmit, reset } = this.props;

    return (
      <Flex direction={DIRECTION.column}>
        <Label text='Ваш адрес' fontSize={FONT_SIZE.large} fontWeight={FONT_WEIGHT.bold} />
        <form>
          <Field
            type='text'
            name='city'
            label='Город'
            placeholder='Город'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='street'
            label='Улица'
            placeholder='Улица'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='home'
            label='Дом'
            placeholder='Дом'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='apartment'
            label='Квартира'
            placeholder='Квартира'
            control={true}
            reset={reset}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
        </form>
        <YMaps>
          <div>My awesome application with maps!</div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
      </Flex>
    );
  }
}

export default UserAddressForm;
