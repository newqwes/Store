import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import { Edit, Save, Cancel } from './styled';

const InputControl = ({ disabled, onEdit, onCancel, onSave, pristine, error, themeVariant }) => {
  if (disabled) {
    return (
      <Edit pristine={pristine} themeVariant={themeVariant} onClick={onEdit}>
        Изменить
      </Edit>
    );
  }

  return (
    <Fragment>
      <Save onClick={onSave} themeVariant={themeVariant} pristine={pristine} error={error}>
        Сохранить
      </Save>
      <Cancel onClick={onCancel} themeVariant={themeVariant} pristine={pristine}>
        Отмена
      </Cancel>
    </Fragment>
  );
};

InputControl.propTypes = {
  themeVariant: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

InputControl.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default InputControl;
