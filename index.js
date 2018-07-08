const isString = x => typeof x === 'string'
const isArray = Array.isArray
const arrayPush = Array.prototype.push
const isObject = x => typeof x === 'object' && !isArray(x)

const clean = (arr, n) => (
  n && arrayPush.apply(arr, isString(n[0]) ? [n] : n), arr
)

const child = (n, cb) =>
  n != null ? (isArray(n) ? n.reduce(clean, []).map(cb) : [n + '']) : []

export const h = (x, y, z) => {
  const transform = node =>
  isString(node)
    ? node
    : isObject(node[1])
      ? {
          [x]: node[0],
          [y]: node[1],
          [z]: child(node[2], transform),
        }
      : transform([node[0], {}, node[1]])
  return transform
}
