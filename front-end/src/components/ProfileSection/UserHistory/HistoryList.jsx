import React from 'react';

import { historyItemsType } from '../../../propType';

import FONT_SIZE from '../../../constants/fontSize';
import FONT_WEIGHT from '../../../constants/fontWeight';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../../constants/position';

import Flex from '../../Flex';
import Label from '../../Label';
import ValueFormatter from '../../ValueFormatter';

import {
  HistoryDescriptionContent,
  HistoryItemContent,
  HistoryPhotoContent,
  HistoryPriceContent,
} from './styled';

const HistoryList = ({ historyStore }) => {
  const historyList = historyStore.map(
    ({ id, name, count, price, description, photoUrl, unitSign, currencySign, weight }) => (
      <HistoryItemContent key={id}>
        <Flex justifyContent={JUSTIFY_CONTENT.spaceBetween} alignItems={ALIGN_ITEMS.stretch}>
          <HistoryPhotoContent backgroundImage={photoUrl} />
          <HistoryDescriptionContent>
            <Label text={name} fontSize={FONT_SIZE.medium} fontWeight={FONT_WEIGHT.bold} />
            <Label
              text={`Описание: ${description}`}
              fontSize={FONT_SIZE.small}
              fontWeight={FONT_WEIGHT.normal}
            />
          </HistoryDescriptionContent>
          <HistoryPriceContent>
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
          </HistoryPriceContent>
        </Flex>
      </HistoryItemContent>
    ),
  );

  return historyList;
};

HistoryList.propTypes = {
  historyStore: historyItemsType.isRequired,
};

export default HistoryList;
