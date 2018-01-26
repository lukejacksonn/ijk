import { h } from './index'

const hh = h('x', 'y', 'z')
const noop = x => x

export default {
  Element: [
    hh(['button', { onclick: noop }, 'testing']),
    { x: 'button', y: { onclick: noop }, z: 'testing' },
  ],
  'Element (no children)': [
    hh(['input', { type: 'range' }]),
    { x: 'input', y: { type: 'range' }, z: [] },
  ],
  'Element (no props)': [
    hh(['button', 'testing']),
    { x: 'button', y: {}, z: 'testing' },
  ],
  'Element (no props, no children)': [hh(['hr']), { x: 'hr', y: {}, z: [] }],
  'Nested Element': [
    hh(['main', [['button', { onclick: noop }, 'testing']]]),
    {
      x: 'main',
      y: {},
      z: [{ x: 'button', y: { onclick: noop }, z: 'testing' }],
    },
  ],
  'Nested Element (no children)': [
    hh(['main', [['input', { type: 'range' }]]]),
    { x: 'main', y: {}, z: [{ x: 'input', y: { type: 'range' }, z: [] }] },
  ],
  'Nested Element (no props)': [
    hh(['main', [['button', 'testing']]]),
    { x: 'main', y: {}, z: [{ x: 'button', y: {}, z: 'testing' }] },
  ],
  'Nested Element (no props, no children)': [
    hh(['main', [['hr']]]),
    { x: 'main', y: {}, z: [{ x: 'hr', y: {}, z: [] }] },
  ],
}
