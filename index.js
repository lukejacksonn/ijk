export const h = node => {
  const [name, props, children] = node || []
  return !node
    ? false
    : typeof props === 'object' && !Array.isArray(props)
      ? {
          name,
          props,
          children: Array.isArray(children)
            ? children.map(h).filter(Boolean)
            : children + '',
        }
      : h([name, {}, props])
}
