# xyzd
> transforms arrays to virtual dom trees

Is h too repetitive? Not a fan of JSX? Love LISP? Code as data and data as code?

This is a tiny recursive transform function that allows you to write terse, declarative representations of virtual DOM trees. It does not try mimic HTML or JSON syntax but instead a nested array structure.

```js
xyzd([name, props, children])
```

The above statement will return a virtual DOM tree that can be passed as a node, to patch and diffing algorithms exposed by libraries like [hyperapp](https://github.com/hyperapp/hyperapp) or [picodom](https://github.com/picodom/picodom).

- The first argument `name` is a `string` (required) used as a HTML tag name
- The second argument `props` is an `object` (optional) containing element attributes
- The third argument `children` is an `string|array` (optional) of child node(s)

All numbers passed as children get converted to strings. All falsey children are discarded.

## Installation

```
npm i xyzd
```

## Usage

Here is a demo on [CodePen](https://codepen.io/lukejacksonn/pen/BJvXvg?editors=0010)

```js
import { h } from 'xyzd'
const vtree = h(
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

```js
const xyzd =
  ['main', [
    ['h1', 'Hello World'],
    ['button', { onclick: console.log }, 'Log Event'],
    ...planets.map(planet),
  ]]
```

```js
const h =
  h('main', {}, [
    h('h1', {}, 'Hello World'],
    h('button', { onclick: console.log }, 'Log Event'),
    planets.map(planet),
  ])
```

```js
const jsx =
  <main>
    <h1>Hello World</h1>
    <button onclick={ console.log }>'Log Event'</button>
    {planets.map(planet)}
  </main>
```
