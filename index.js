const clense = (a, b) =>
  !b ? a : typeof b[0] === 'string' ? [...a, b] : [...a, ...b]

export const h = (x, y, z) => node =>
  !!node && typeof node[1] === 'object' && !Array.isArray(node[1])
    ? {
        [x]: node[0],
        [y]: node[1],
        [z]: Array.isArray(node[2])
          ? node[2].reduce(clense, []).map(h(x, y, z))
          : node[2] + '',
      }
    : h(x, y, z)([node[0], {}, node[1] || ''])
