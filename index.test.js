import { h } from './index'

const hh = h('x', 'y', 'z')
const noop = x => x

const Item = data => ['li', data]
const Component = ({ title, story, related }) => [
  'section',
  [['h2', title], ['hr'], ['p', story], related.map(Item)],
]

const Main = [
  'main',
  [
    'Hello',
    ['p', 0],
    ['h1', 'Hello World'],
    ['input', { type: 'range' }],
    ['ul', [1, 2, 3].map(Item)],
    ['button', { onclick: noop }, 'Log Event'],
    false && ['span', 'Hidden'],
    Component({
      title: 'Some News',
      story: 'lorem ipsum dolor sit amet',
      related: [4, 5],
    }),
  ],
]

const Button = ['button', { onclick: noop }, 'testing']
const Input = ['input', { type: 'range' }]
const Title = ['h1', 'testing']
const Zero = ['p', 0]
const Hr = ['hr']

export default {
  Element: {
    base: [hh(Button), { x: 'button', y: { onclick: noop }, z: 'testing' }],
    'no children': [hh(Input), { x: 'input', y: { type: 'range' }, z: [] }],
    'no props': [hh(Title), { x: 'h1', y: {}, z: 'testing' }],
    'no props, no children': [hh(Hr), { x: 'hr', y: {}, z: [] }],
    'children 0': [hh(Zero), { x: 'p', y: {}, z: '0' }],
    'just string': [hh('Hello'), 'Hello'],
  },
  Nested: {
    base: [
      hh(['main', [Button]]),
      {
        x: 'main',
        y: {},
        z: [{ x: 'button', y: { onclick: noop }, z: 'testing' }],
      },
    ],
    'base with string': [
      hh(['main', [Button, 'Hello']]),
      {
        x: 'main',
        y: {},
        z: [{ x: 'button', y: { onclick: noop }, z: 'testing' }, 'Hello'],
      },
    ],
    'no children': [
      hh(['main', [Input]]),
      { x: 'main', y: {}, z: [{ x: 'input', y: { type: 'range' }, z: [] }] },
    ],
    'no props': [
      hh(['main', [Title]]),
      { x: 'main', y: {}, z: [{ x: 'h1', y: {}, z: 'testing' }] },
    ],
    'no props, no children': [
      hh(['main', [Hr]]),
      { x: 'main', y: {}, z: [{ x: 'hr', y: {}, z: [] }] },
    ],
  },
  Component: {
    base: [
      hh(Main),
      {
        x: 'main',
        y: {},
        z: [
          'Hello',
          { x: 'p', y: {}, z: '0' },
          { x: 'h1', y: {}, z: 'Hello World' },
          { x: 'input', y: { type: 'range' }, z: [] },
          {
            x: 'ul',
            y: {},
            z: [
              { x: 'li', y: {}, z: '1' },
              { x: 'li', y: {}, z: '2' },
              { x: 'li', y: {}, z: '3' },
            ],
          },
          { x: 'button', y: { onclick: noop }, z: 'Log Event' },
          {
            x: 'section',
            y: {},
            z: [
              { x: 'h2', y: {}, z: 'Some News' },
              { x: 'hr', y: {}, z: [] },
              { x: 'p', y: {}, z: 'lorem ipsum dolor sit amet' },
              { x: 'li', y: {}, z: '4' },
              { x: 'li', y: {}, z: '5' },
            ],
          },
        ],
      },
    ],
  },
}
