export const xyzd = ([name, props, children]) =>
  typeof props === 'object' && !Array.isArray(props)
    ? {
        name,
        props,
        children: Array.isArray(children) ? children.map(xyzd) : children + '',
      }
    : xyzd([name, {}, props])
