import styled from 'styled-components';
import { get } from 'lodash/fp';

const getLinkTextColor = ({ themeVariant }) => get(['theme', 'label', 'color', themeVariant]);

export const Wrapper = styled.span`
  a {
    font-size: 22px;
    color: ${getLinkTextColor};
    font-weight: bold;
    text-decoration: none;
  }
`;
