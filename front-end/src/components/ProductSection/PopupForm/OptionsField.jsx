import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash/fp';

import Flex from '../../Flex';
import Add from '../../Icons/Add';
import OptionList from './OptionList.jsx';

import { AddWrapper } from './styled';

const MAX_OPTIONS_LENGTH = 8;

const OptionsField = ({ fields: { push, map, length, remove }, meta: { error } }) => {
  const addOption = () => {
    if (length < MAX_OPTIONS_LENGTH) {
      push({ price: 0, weight: 0 });
    }
  };

  if (isEqual(length, 0)) addOption();

  return (
    <Flex>
      <OptionList map={map} remove={remove} error={error} />
      <AddWrapper onClick={addOption}>
        <Add />
      </AddWrapper>
    </Flex>
  );
};

OptionsField.propTypes = {
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

export default OptionsField;
