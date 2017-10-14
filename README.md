# 4loop

*Keep your for loop syntax the same for all different types.
Just pass in your constraints and callback and we will determine best course of action.*

## Install

`$ npm install 4loop`

## Use

```js
const fourLoop = require('4loop');

const obj = { foo: 'bar', baz: 'cat' };
const arr = ['foo', 'bar', 'baz', 'cat'];
const arrLength = arr.length;

fourLoop(obj, (iterator, key) => {
    // Do magic here
});

fourLoop(arr, (iterator, key) => {
    // Do magic here
});

fourLoop(arrLength, (iterator) => {
    // Do magic here
});

```