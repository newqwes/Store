import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import InputField from '../../InputField';

import { SelectFieldContent, OptionListContent, RubbishWrapper } from './styled';
import Rubbish from '../../Icons/Rubbish';

const OptionList = ({ map, remove, error }) =>
  map((option, index) => {
    const removeOption = () => remove(index);

    return (
      <OptionListContent key={index}>
        <Field
          name={`${option}.price`}
          type='number'
          error={error}
          component={InputField}
          fieldStyle={SelectFieldContent}
        />
        <Field
          name={`${option}.weight`}
          type='number'
          error={error}
          component={InputField}
          fieldStyle={SelectFieldContent}
        />
        <RubbishWrapper onClick={removeOption}>
          <Rubbish />
        </RubbishWrapper>
      </OptionListContent>
    );
  });

OptionList.propTypes = {
  error: PropTypes.string,
  map: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default OptionList;
