import React from 'react';
import PropTypes from 'prop-types';

import { orderDataType } from '../../../propType';
import Item from './Item.jsx';

import { ListItemWrapper } from './styled';

const ListItem = ({ date, orderData }) => {
  const items = orderData.map(({ id, ...props }) => <Item key={id} {...props} />);

  return (
    <ListItemWrapper>
      <h3>{date}</h3>
      {items}
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  date: PropTypes.string.isRequired,
  orderData: orderDataType.isRequired,
};

export default ListItem;
