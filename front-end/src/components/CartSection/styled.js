import styled from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const CartSectionWrapper = styled.section`
  margin: auto 0;
  padding: 20px;
`;

export const CartSectionContent = styled.div`
  margin: 0 25%;
  padding: 20px 0;
`;

export const TotalPriceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 25%;
  max-width: ${SECTION_WIDTH.midle}px;

  button {
    font-size: 15px;
    margin: 50px 0;
    padding: 10px;
  }
`;
