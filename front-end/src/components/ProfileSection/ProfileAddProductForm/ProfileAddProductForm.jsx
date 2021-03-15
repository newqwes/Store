import React from 'react';
import { Field } from 'redux-form';

import Flex from '../../Flex';
import Label from '../../Label';
import InputField from '../../InputField';

import FONT_SIZE from '../../../constants/fontSize';
import DIRECTION from '../../../constants/direction';
import FONT_WEIGHT from '../../../constants/fontWeight';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import { InputFieldContent } from '../styled';

class ProfileAddProductForm extends React.Component {
  render() {
    return (
      <Flex direction={DIRECTION.column}>
        <Label text='Добавить продукт' fontSize={FONT_SIZE.large} fontWeight={FONT_WEIGHT.bold} />
        <form>
          <Field
            type='text'
            name='name'
            onChange={this.handleChange}
            label='Название'
            component={InputField}
            fieldStyle={InputFieldContent}
          />
          <Field
            type='text'
            name='description'
            label='Описание'
            component={InputField}
            fieldStyle={InputFieldContent}
          />
          <Field name='type' label='Тип' component='select'>
            <option value='pizza'>пицца</option>
            <option value='chicken'>курица</option>
            <option value='salad'>салат</option>
            <option value='drink'>напиток</option>
            <option value='sauce'>соус</option>
          </Field>
          <Field
            type='text'
            name='photoUrl'
            label='Ссылка на картинку'
            component={InputField}
            fieldStyle={InputFieldContent}
          />
          <Flex justifyContent={JUSTIFY_CONTENT.center} direction={DIRECTION.column}>
            <span>Создать</span>
          </Flex>
        </form>
      </Flex>
    );
  }
}

export default ProfileAddProductForm;
