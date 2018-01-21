const clense = (a, b) =>
  !b ? a : typeof b[0] === 'string' ? [...a, b] : [...a, ...b]

const factory = schema => node =>
  !!node && typeof node[1] === 'object' && !Array.isArray(node[1])
    ? {
        [schema[0]]: node[0],
        [schema[1]]: node[1],
        [schema[2]]: Array.isArray(node[2])
          ? node[2].reduce(clense, []).map(factory(schema))
          : node[2] + '',
      }
    : factory(schema)([node[0], {}, node[1] || ''])

export const h = factory(['name', 'props', 'children'])
export const p = factory(['nodeName', 'attributes', 'children'])
