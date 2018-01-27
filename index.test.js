import { h } from './index'

const hh = h('x', 'y', 'z')
const noop = x => x

export default {
  Element: {
    base: [
      hh(['button', { onclick: noop }, 'testing']),
      { x: 'button', y: { onclick: noop }, z: 'testing' },
    ],
    'no children': [
      hh(['input', { type: 'range' }]),
      { x: 'input', y: { type: 'range' }, z: [] },
    ],
    'no props': [
      hh(['button', 'testing']),
      { x: 'button', y: {}, z: 'testing' },
    ],
    'no props, no children': [hh(['hr']), { x: 'hr', y: {}, z: [] }],
  },
  Nested: {
    base: [
      hh(['main', [['button', { onclick: noop }, 'testing']]]),
      {
        x: 'main',
        y: {},
        z: [{ x: 'button', y: { onclick: noop }, z: 'testing' }],
      },
    ],
    'no children': [
      hh(['main', [['input', { type: 'range' }]]]),
      { x: 'main', y: {}, z: [{ x: 'input', y: { type: 'range' }, z: [] }] },
    ],
    'no props': [
      hh(['main', [['button', 'testing']]]),
      { x: 'main', y: {}, z: [{ x: 'button', y: {}, z: 'testing' }] },
    ],
    'no props, no children': [
      hh(['main', [['hr']]]),
      { x: 'main', y: {}, z: [{ x: 'hr', y: {}, z: [] }] },
    ],
  },
}
