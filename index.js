const isString = x => typeof x === 'string'
const isArray = x => Array.isArray(x)
const isObject = x => typeof x === 'object' && !isArray(x)

const clean = (arr, n) =>
  (n && Array.prototype.push.apply(arr, (isString(n[0]) ? [n] : n)), arr)

const child = (n, cb) =>
  n !== undefined
    ? (isArray(n)
      ? n.reduce(clean, []).map(cb)
      : n + '')
    : []

export const h = (x, y, z) => node =>
  isString(node)
    ? node
    : isObject(node[1])
      ? {
          [x]: node[0],
          [y]: node[1],
          [z]: child(node[2], h(x, y, z)),
        }
      : h(x, y, z)([node[0], {}, node[1]])
