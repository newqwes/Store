import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { fieldType } from '../../propType';

const FieldList = ({ fields, component, fieldStyle }) => {
  const fieldList = fields.map(({ name, ...other }) => (
    <Field key={name} component={component} {...other} name={name} fieldStyle={fieldStyle} />
  ));

  return fieldList;
};

FieldList.propTypes = {
  component: PropTypes.elementType.isRequired,
  fieldStyle: PropTypes.elementType.isRequired,
  fields: PropTypes.arrayOf(fieldType),
};

export default FieldList;
