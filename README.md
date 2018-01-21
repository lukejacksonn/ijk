# xyzd
> transforms arrays to virtual dom trees

Is h too repetitive? Not a fan of JSX? Love LISP? Code as data and data as code?

This is a tiny recursive transform function that allows you to write terse, declarative representations of virtual DOM trees. It does not try mimic HTML or JSON syntax but instead, a nested array structure.

```js
h([name, props, children]) // hyperapp and picodom trees
p([nodeName, attributes, children]) // preact trees
```

The above statements both return a virtual DOM tree that can be passed as a node to patch, diff and render algorithms exposed by libraries like [hyperapp](https://github.com/hyperapp/hyperapp), [picodom](https://github.com/picodom/picodom) or [preact](https://github.com/developit/preact).

## Signature

The function accepts an array argument (your DOM representation):

- Index `0` should contain a `string` (required) used as a HTML tag name
- Index `1` should contain an `object` (optional) containing element attributes
- Index `2` should contain an `string|array` (optional) of text content or child nodes

Children are flattened and falsey children are excluded. Numbers passed as children get converted to strings.

## Installation

```
npm i xyzd
```

## Usage

Here is a demo with [Hyperapp](https://codepen.io/lukejacksonn/pen/BJvXvg?editors=0010) and [Preact](https://codepen.io/lukejacksonn/pen/ZvwKva?editors=0010).

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

xyzd is essentially `h` but with optional props and you only have to call `h` once; not every time you want to represent an element in the DOM. This generally means less repetition and one less import in your view files.

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
