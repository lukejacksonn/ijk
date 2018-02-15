# ijk
> Transforms arrays into virtual dom trees

Find h a bit repetitive? Not a huge fan of JSX? Love LISP? Code as data and data as code?

This is a tiny recursive factory function that allows you to write terse, declarative representations of virtual DOM trees. It does not try mimic HTML or JSON syntax but instead a series of nested arrays to represent user interfaces.

```js
const tree = h(
  ['main', [
    ['h1', 'Hello World'],
    ['input', { type: 'range' }],
    ['button', { onclick: console.log }, 'Log Event'],
  ]]
)
```

The above call to `h` returns a virtual DOM tree with named attributes that respect the default schema. Expected output here, would be of the shape:

```js
{ nodeName: 'main', attributes: {}, children: [...] }
```

Trees of this shape can be passed in to diff, patch and render algorithms exposed by libraries like [hyperapp](https://github.com/hyperapp/hyperapp), [picodom](https://github.com/picodom/picodom) or [preact](https://github.com/developit/preact).

## Signature

The `h` function expects a single node of type `[0,1,2]` as an argument, where:

- Index `0` contains a `string` used as the elements tag name (required)
- Index `1` contains an `object` containing the elements attributes (optional)
- Index `2` contains a `string` (text content) or an `array` of child nodes (optional)

Children are flattened and falsey children are excluded. Numbers passed as children get converted to strings.

## Installation

```
npm i ijk
```

## Usage

Here is a demo with [Hyperapp](https://codepen.io/lukejacksonn/pen/BJvXvg?editors=0010) and [Preact](https://codepen.io/lukejacksonn/pen/ZvwKva?editors=0010).

```js
import { h } from 'ijk'

const tree = h(
  ['main', [
    ['h1', 'Hello World']
    ['input', { type: 'range' }]
    ['button', { onclick: console.log }, 'Log Event']
    ['ul', [
      ['li', 1]
      ['li', 2]
      ['li', 3]
    ]],
    false && ['span', 'Hidden']
  ]]
)
```

## Comparison

ijk is essentially `h` but with optional props and you only have to call `h` once; not every time you want to represent an element in the DOM. This generally means less repetition and one less import in your view files.

```js
const h =
  h('main', {}, [
    h('h1', {}, 'Hello World'),
    h('input', { type: 'range' }),
    h('button', { onclick: console.log }, 'Log Event'),
    h('ul', {}, [
      h('li', {}, 1),
      h('li', {}, 2),
      h('li', {}, 3),
    ]),
    false && h('span', {}, 'Hidden')
  ])
```

The main advantages over using JSX is less repetition of tag names and no build step is required.

```jsx
const jsx =
  <main>
    <h1>Hello World</h1>
    <input type='range' />
    <button onclick={ console.log }>Log Event</button>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    {false && <span>'Hidden'</span>}
  </main>
```

## Advanced

Here is an example that takes advantage of most features and demonstrates components.

```js
import { h } from 'ijk'

const Item = data => ['li', data]
const Article = ({ title, story, related }) => [
  'article',
  [
    ['h2', title],
    ['hr'],
    ['p', story],
    related.map(Item),
  ]
]

const Main =
  ['main', [
    ['h1', 'Hello World'],
    ['input', { type: 'range' }],
    ['ul', [
      ['li', 1],
      ['li', 2],
      ['li', 3],
    ]],
    ['button', { onclick: console.log }, 'Log Event'],
    false && ['span', 'Hidden'],
    Article({
      title: 'Some News',
      story: 'lorem ipsum dolor sit amet',
      related: [4,5],
    })
  ]]

const tree = h(Main)
```
