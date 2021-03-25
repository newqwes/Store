import React from 'react';

import { orderDataItemType } from '../../../propType';

import FONT_SIZE from '../../../constants/fontSize';
import FONT_WEIGHT from '../../../constants/fontWeight';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../../constants/position';

import Flex from '../../Flex';
import Label from '../../Label';
import ValueFormatter from '../../ValueFormatter';

import { DescriptionContent, ItemContent, PhotoContent, PriceContent } from './styled';

const Item = ({ name, count, price, description, photoUrl, unitSign, currencySign, weight }) => (
  <ItemContent>
    <Flex justifyContent={JUSTIFY_CONTENT.spaceBetween} alignItems={ALIGN_ITEMS.stretch}>
      <PhotoContent backgroundImage={photoUrl} />
      <DescriptionContent>
        <Label text={name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.bold} />
        <Label
          text={`Описание: ${description}`}
          fontSize={FONT_SIZE.small}
          fontWeight={FONT_WEIGHT.normal}
        />
      </DescriptionContent>
      <PriceContent>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <ValueFormatter
            value={weight}
            fontSize={FONT_SIZE.small}
            fontWeight={FONT_WEIGHT.normal}
            postfix={unitSign}
          />
        </Flex>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <ValueFormatter
            value={price}
            fontSize={FONT_SIZE.small}
            fontWeight={FONT_WEIGHT.normal}
            postfix={currencySign}
          />
        </Flex>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Label text={count} fontSize={FONT_SIZE.small} fontWeight={FONT_WEIGHT.normal} />
        </Flex>
      </PriceContent>
    </Flex>
  </ItemContent>
);

Item.propTypes = orderDataItemType.isRequired;

export default Item;
