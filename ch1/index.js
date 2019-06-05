export function splat(fn) {
  return function (array) {
    return fn.apply(null, array);
  }
}

export function unsplat(fn) {
  return function (...args) {
    return fn.call(null, ...args);
  }
}
