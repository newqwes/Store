import React from 'react';
import PropTypes from 'prop-types';

import { orderDataType } from '../../../propType';
import Item from './Item.jsx';

import { ListWrapper } from './styled';

const List = ({ date, orderData }) => {
  const items = orderData.map(({ id, ...props }) => <Item key={id} {...props} />);

  return (
    <ListWrapper>
      <h3>{date}</h3>
      {items}
    </ListWrapper>
  );
};

List.propTypes = {
  date: PropTypes.string.isRequired,
  orderData: orderDataType.isRequired,
};

export default List;
