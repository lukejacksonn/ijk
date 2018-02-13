import { h } from './index'

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
const ButtonNode = {
  nodeName: 'button',
  attributes: { onclick: noop },
  children: 'testing',
}

const Input = ['input', { type: 'range' }]
const InputNode = {
  nodeName: 'input',
  attributes: { type: 'range' },
  children: [],
}

const Title = ['h1', 'testing']
const TitleNode = { nodeName: 'h1', attributes: {}, children: 'testing' }

const Zero = ['p', 0]
const ZeroNode = { nodeName: 'p', attributes: {}, children: '0' }

const Hr = ['hr']
const HrNode = { nodeName: 'hr', attributes: {}, children: [] }

export default {
  Element: {
    base: [h(Button), ButtonNode],
    'no children': [h(Input), InputNode],
    'no props': [h(Title), TitleNode],
    'no props, no children': [h(Hr), HrNode],
    'children 0': [h(Zero), ZeroNode],
    'just string': [h('Hello'), 'Hello'],
  },
  Nested: {
    base: [
      h(['main', [Button]]),
      {
        nodeName: 'main',
        attributes: {},
        children: [ButtonNode],
      },
    ],
    'base with string': [
      h(['main', [Button, 'Hello']]),
      {
        nodeName: 'main',
        attributes: {},
        children: [ButtonNode, 'Hello'],
      },
    ],
    'no children': [
      h(['main', [Input]]),
      {
        nodeName: 'main',
        attributes: {},
        children: [InputNode],
      },
    ],
    'no props': [
      h(['main', [Title]]),
      {
        nodeName: 'main',
        attributes: {},
        children: [TitleNode],
      },
    ],
    'no props, no children': [
      h(['main', [Hr]]),
      {
        nodeName: 'main',
        attributes: {},
        children: [HrNode],
      },
    ],
  },
  Component: {
    base: [
      h(Main),
      {
        nodeName: 'main',
        attributes: {},
        children: [
          'Hello',
          { nodeName: 'p', attributes: {}, children: '0' },
          { nodeName: 'h1', attributes: {}, children: 'Hello World' },
          { nodeName: 'input', attributes: { type: 'range' }, children: [] },
          {
            nodeName: 'ul',
            attributes: {},
            children: [
              { nodeName: 'li', attributes: {}, children: '1' },
              { nodeName: 'li', attributes: {}, children: '2' },
              { nodeName: 'li', attributes: {}, children: '3' },
            ],
          },
          {
            nodeName: 'button',
            attributes: { onclick: noop },
            children: 'Log Event',
          },
          {
            nodeName: 'section',
            attributes: {},
            children: [
              { nodeName: 'h2', attributes: {}, children: 'Some News' },
              { nodeName: 'hr', attributes: {}, children: [] },
              {
                nodeName: 'p',
                attributes: {},
                children: 'lorem ipsum dolor sit amet',
              },
              { nodeName: 'li', attributes: {}, children: '4' },
              { nodeName: 'li', attributes: {}, children: '5' },
            ],
          },
        ],
      },
    ],
  },
}
