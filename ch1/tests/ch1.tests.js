const add = (x, y) => {
  return x + y;
}

describe('add', () => {
  it('returns the sum of the two args', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
