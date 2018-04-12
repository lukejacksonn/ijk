# ijk
> Transforms arrays into virtual DOM trees

[![Build Status](https://travis-ci.org/lukejacksonn/ijk.svg?branch=master)](https://travis-ci.org/lukejacksonn/ijk)
[![codecov](https://codecov.io/gh/lukejacksonn/ijk/branch/master/graph/badge.svg)](https://codecov.io/gh/lukejacksonn/ijk)

Find `h` a bit repetitive? Not a huge fan of JSX? Love LISP? Code as data and data as code?

This is a tiny recursive factory function that allows you to write terse, declarative representations of virtual DOM trees. It does not try mimic HTML or JSON syntax but instead a series of nested arrays to represent user interfaces.

```js
const tree = h('x', 'y', 'z')
(
  ['main', [
    ['h1', 'Hello World'],
    ['input', { type: 'range' }],
    ['input', { onclick: console.log }, 'Log Event'],
  ]]
)
```

The above call to `h` returns a virtual DOM tree with named attributes that respect the provided schema. Expected output here, would be of the shape `{ x: 'main', y: {}, z: [...] }`. A tree like this can be passed as a node to patch, diff and render algorithms exposed by libraries like [Hyperapp](https://github.com/hyperapp/hyperapp), [Ultradom](https://github.com/jorgebucaran/ultradom) or [Preact](https://github.com/developit/preact).

### Schemas

- **Hyperapp** / **Ultradom** / **Preact:** `h('nodeName','attributes','children')`

## Signature

A call to `h(x,y,z)` returns a build function that expects a node of type `[0,1,2]` where:

- Index `0` contains a `string` used as the elements tag name (required)
- Index `1` contains an `object` containing element attributes (optional)
- Index `2` contains an `string|array` of content or children (optional)

Children are flattened and falsey children are excluded. Numbers passed as children get converted to strings.

## Installation

```
npm i ijk
```

## Usage

Here is a demo with [Hyperapp](https://codepen.io/lukejacksonn/pen/BJvXvg?editors=0010) and [Preact](https://codepen.io/lukejacksonn/pen/ZvwKva?editors=0010).

```js
import { h } from 'ijk'

const tree = h('nodeName', 'attributes', 'children')(
  ['main', [
    ['h1', 'Hello World'],
    ['input', { type: 'range' }],
    ['button', { onclick: console.log }, 'Log Event'],
    ['ul', [
      ['li', 1],
      ['li', 2],
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

const tree = h('nodeName', 'attributes', 'children')(Main)
```
