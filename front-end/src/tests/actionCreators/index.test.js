import { addToCart } from '../../actionCreators';
import { ADD_TO_CART } from '../../actions';
import mockProductItem from '../helpers/mocks';

describe('actions', () => {
  it('addToCart action creator', () => {
    const payload = mockProductItem;

    const expectedAction = {
      type: ADD_TO_CART,
      payload,
    };

    expect(addToCart(payload)).toEqual(expectedAction);
  });
});
