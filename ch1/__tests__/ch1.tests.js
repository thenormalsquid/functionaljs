import sinon from 'sinon';

import { splat, unsplat } from '../index';

const add = (x, y) => {
  return x + y;
}

describe('add', () => {
  it('returns the sum of the two args', () => {
    expect(add(2, 2)).toEqual(4);
  });
});

describe('splat', () => {
  it('applies an array as args to the curried function', () => {
    const emptyFunc = () => ({});
    const spy = sinon.spy(emptyFunc, 'apply');
    emptyFunc.apply(null, [1, 2, 3]);
    const arrayArgs = [1, 2, 3];
    splat(emptyFunc)([1, 2, 3]);

    expect(spy.calledWith(null, arrayArgs)).toBeTruthy();
  });

  it('callback accepts args passed to the curried function', () => {
    const val = splat(add)([1, 2]);

    expect(val).toEqual(3);
  });
});

describe('unsplat', () => {
  it('calls the curried function with the supplied arguments', () => {
    const emptyFunc = () => ({});
    const spy = sinon.spy(emptyFunc, 'call');
    const args = [1, 2, 3, 4, 'foo'];
    unsplat(emptyFunc)(...args);

    expect(spy.calledWith(null, ...args)).toBeTruthy();
  });

  it('callback accepts args passed to the curried function', () => {
    const val = unsplat(add)(5, 6);

    expect(val).toEqual(11);
  });
});
