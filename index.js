const isString = x => typeof x === 'string'
const isArray = x => Array.isArray(x)
const isObject = x => typeof x === 'object' && !isArray(x)

const clean = (a, b) => (!b ? a : isString(b[0]) ? a.concat([b]) : a.concat(b))
const child = x => f =>
  x || x === 0 ? (isArray(x) ? x.reduce(clean, []).map(f) : x + '') : []

const build = (x, y, z) => node =>
  !!node && isString(node)
    ? node
    : isObject(node[1])
      ? {
          [x]: node[0],
          [y]: node[1],
          [z]: child(node[2])(build(x, y, z)),
        }
      : build(x, y, z)([node[0], {}, node[1]])

export const h = build
