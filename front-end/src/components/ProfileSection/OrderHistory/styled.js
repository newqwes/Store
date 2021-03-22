import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListItemWrapper = styled.div`
  margin-bottom: 50px;
`;

export const ItemContent = styled.div(
  ({ themeVariant }) => css`
    margin-bottom: 15px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px -8px ${get(['theme', 'cart', 'shadow', themeVariant])};
  `,
);

export const PhotoContent = styled.div`
  flex-basis: 15%;
  background: no-repeat center/80% url(${props => props.backgroundImage});
  height: 80px;
  align-self: center;
`;

export const DescriptionContent = styled.div`
  flex-basis: 65%;

  span {
    display: block;
    margin-top: 10px;
  }
`;

export const PriceContent = styled.div`
  flex-basis: 20%;

  span {
    min-width: 40px;
    text-align: center;
  }

  div {
    margin-top: 10px;
  }

  button {
    font-size: 16px;
    width: 30px;
    height: 30px;
  }
`;
