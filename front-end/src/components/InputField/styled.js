import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

export const Edit = styled.span(
  ({ themeVariant }) => css`
    position: absolute;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;
    bottom: 25px;
    right: 12px;
    color: ${get(['theme', 'control', 'editButton', 'active', themeVariant])};

    &:hover {
      color: ${get(['theme', 'control', 'editButton', 'hover', themeVariant])};
    }
  `,
);

export const Cancel = styled(Edit)`
  right: -60px;
`;

const getSaveButtonColor = ({ themeVariant, pristine, error }) => {
  const buttonStatus = pristine || error ? 'disabled' : 'active';

  const saveButtonColor = get(['theme', 'control', 'saveButton', buttonStatus, themeVariant]);

  return saveButtonColor;
};

const getSaveButtonColorHover = ({ themeVariant, pristine, error }) => {
  const buttonStatus = pristine || error ? 'disabled' : 'hover';

  const saveButtonColorHover = get(['theme', 'control', 'saveButton', buttonStatus, themeVariant]);

  return saveButtonColorHover;
};

export const Save = styled(Edit)(
  ({ pristine, error }) => css`
    color: ${getSaveButtonColor};
    cursor: ${pristine || error ? 'default' : 'pointer'};

    &:hover {
      color: ${getSaveButtonColorHover};
    }
  `,
);
