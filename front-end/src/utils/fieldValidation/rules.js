import { isNil, isEqual, reduce, gte, lte, toString, compose } from 'lodash/fp';

export const rules = {
  required: (value) => !isNil(value) && !isEqual(value, ''),
  equal: ({ value, other }) => isEqual(value, other),
  email: (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
  minCharacters: (other) => compose((value) => gte(value.length, other), toString),
  maxCharacters: (other) => compose((value) => lte(value.length, other), toString),
};

export const validation = (validations) => (value) =>
  reduce((errors, { rule, message }) => (rule(value) ? errors : message), '', validations);
