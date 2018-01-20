export const h = schema => node =>
  !node
    ? false
    : typeof node[1] === 'object' && !Array.isArray(node[1])
      ? {
          [schema[0]]: node[0],
          [schema[1]]: node[1],
          [schema[2]]: Array.isArray(node[2])
            ? node[2].map(h(schema)).filter(Boolean)
            : node[2] + '',
        }
      : h(schema)([node[0], {}, node[1]])
