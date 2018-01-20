const h = schema => node => {
  const go = x =>
    !x
      ? false
      : typeof x[1] === 'object' && !Array.isArray(x[1])
        ? {
            [schema[0]]: x[0],
            [schema[1]]: x[1],
            [schema[2]]: Array.isArray(x[2])
              ? x[2].map(go).filter(Boolean)
              : x[2] + '',
          }
        : go([x[0], {}, x[1]])

  return go(node)
}
