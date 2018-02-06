const clean = (a, b) =>
  !b ? a : typeof b[0] === 'string' ? a.concat([b]) : a.concat(b)

const build = (x, y, z) => node =>
  !!node && typeof node[1] === 'object' && !Array.isArray(node[1])
    ? {
        [x]: node[0],
        [y]: node[1],
        [z]:
          node[2] || node[2] === 0
            ? Array.isArray(node[2])
              ? node[2].reduce(clean, []).map(build(x, y, z))
              : node[2] + ''
            : [],
      }
    : build(x, y, z)([node[0], {}, node[1]])

export const h = build
