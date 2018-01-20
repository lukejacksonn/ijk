export const h = node =>
  !node
    ? false
    : typeof node[1] === 'object' && !Array.isArray(node[1])
      ? {
          name: node[0],
          props: node[1],
          children: Array.isArray(node[2])
            ? node[2].map(h).filter(Boolean)
            : node[2] + '',
        }
      : h([node[0], {}, node[1]])

export const p = node =>
  !node
    ? false
    : typeof node[1] === 'object' && !Array.isArray(node[1])
      ? {
          nodeName: node[0],
          attributes: node[1],
          children: Array.isArray(node[2])
            ? node[2].map(p).filter(Boolean)
            : node[2] + '',
        }
      : p([node[0], {}, node[1]])
