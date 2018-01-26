import { h } from './index'

const hh = h('x', 'y', 'z')

export default {
  x: [hh(['hr']), { x: 'hr', y: {}, z: [] }],
  xy: [
    hh(['input', { type: 'range' }]),
    { x: 'input', y: { type: 'range' }, z: [] },
  ],
  xyz: [
    hh(['button', { onclick: console.log }, 'testing']),
    { x: 'button', y: { onclick: console.log }, z: 'testing' },
  ],
  xz: [hh(['button', 'testing']), { x: 'button', y: {}, z: 'testing' }],
  xzx: [
    hh(['main', [['hr']]]),
    { x: 'main', y: {}, z: [{ x: 'hr', y: {}, z: [] }] },
  ],
  xzxy: [
    hh(['main', [['input', { type: 'range' }]]]),
    { x: 'main', y: {}, z: [{ x: 'input', y: { type: 'range' }, z: [] }] },
  ],
}
