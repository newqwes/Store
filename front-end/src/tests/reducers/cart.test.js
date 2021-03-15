import cart from '../../reducers/cart';

describe('Reducer cart', () => {
  it('should return the empty initial state', () => {
    expect(cart(undefined, {})).toEqual([]);
  });
});
