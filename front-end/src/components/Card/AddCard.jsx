import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';
import СircleWithPlus from '../Icons/СircleWithPlus';

import { AddCardWrapper, СircleWithPlusWrapper } from './styled';

export const AddCard = ({ togglePopup, themeVariant }) => (
  <AddCardWrapper themeVariant={themeVariant} onClick={togglePopup}>
    <СircleWithPlusWrapper>
      <СircleWithPlus size={180} />
    </СircleWithPlusWrapper>
  </AddCardWrapper>
);

AddCard.propTypes = {
  themeVariant: PropTypes.string,
  title: PropTypes.string,
  togglePopup: PropTypes.func.isRequired,
};

AddCard.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};
