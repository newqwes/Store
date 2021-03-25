import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import DIRECTION from '../../../constants/direction';

import InputField from '../../InputField';
import Flex from '../../Flex';

import { SmallInputFieldContent, OptionsWrapper } from './styled';

const Options = ({ fields: { push, map, length, remove }, meta: { error } }) => {
  const addOption = () => push({ price: 0, weight: 0 });

  if (isEqual(length, 0)) addOption();

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
          <span onClick={() => remove(index)}>-</span>
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
      <span onClick={addOption}>+</span>
    </Flex>
  );
};

Options.propTypes = {
  fields: PropTypes.shape({
    push: PropTypes.func.isRequired,
    map: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

export default Options;
