# xyzd
> transforms arrays to virtual dom trees

Is h too repetitive? Not a fan of JSX? Love LISP? Code as data and data as code?

This is a tiny recursive transform function that allows you to write terse, declarative representations of virtual DOM trees. It does not try mimic HTML or JSON syntax but instead a nested array structure.

```js
h(schema)(['button', { onclick: console.log }, 'Log Event'])
```

The above statement will return a virtual DOM tree that can be passed as a node, to patch, diff and render algorithms exposed by libraries like [hyperapp](https://github.com/hyperapp/hyperapp), [picodom](https://github.com/picodom/picodom) or [preact](https://github.com/developit/preact).

## Schema

You will need to specify the schema of the desired output depending on the consumer:

- *Hyperapp:* `['name', 'props', 'children']`
- *Preact:* `['nodeName', 'attributes', 'children']`

This will return a function that accepts an array (your DOM representation)

- The first argument should be a `string` (required) used as a HTML tag name
- The second argument should be an `object` (optional) containing element attributes
- The third argument should be an `string|array` (optional) of child node(s)

All numbers passed as children get converted to strings. All falsey children are discarded.

## Installation

```
npm i xyzd
```

## Usage

Here is a demo with [Hyperapp](https://codepen.io/lukejacksonn/pen/BJvXvg?editors=0010) and [Preact](https://codepen.io/lukejacksonn/pen/ZvwKva?editors=0010).

```js
import { h } from 'xyzd'
const vtree = h(schema)(
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
