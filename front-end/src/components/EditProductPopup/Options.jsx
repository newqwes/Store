import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import DIRECTION from '../../constants/direction';

import InputField from '../InputField';
import Flex from '../Flex';
import Button from '../Button';

import { SmallInputFieldContent, OptionsWrapper } from './styled';

const Options = ({ fields: { push, map, length, remove }, meta: { error } }) => {
  if (isEqual(length, 0)) push({});
  const addOption = () => push({});
  return (
    <Flex direction={DIRECTION.column}>
      {map((option, index) => (
        <OptionsWrapper key={index}>
          <Field
            name={`${option}.price`}
            type='number'
            label='Цена'
            error={error}
            component={InputField}
            fieldStyle={SmallInputFieldContent}
          />
          <Button text='-' onClick={() => remove(index)} />
          <Field
            name={`${option}.weight`}
            type='number'
            label='Величина'
            error={error}
            component={InputField}
            fieldStyle={SmallInputFieldContent}
          />
        </OptionsWrapper>
      ))}
      <Button text='+' onClick={addOption} />
    </Flex>
  );
};

Options.propTypes = {
  fields: PropTypes.any,
  meta: PropTypes.any,
};

export default Options;
