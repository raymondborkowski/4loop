# 4loop

*Keep your for loop syntax the same for all different types.
Just pass in your constraints and callback and we will determine best course of action.
<br><br>If you pass in anything with a value(obj, map, arr), you will always get that returned first otherwise it will be the iterator or key. Please see examples below*

## Install

`$ npm install 4loop`

## Use

```js
const fourLoop = require('4loop');

const obj = { foo: 'bar', baz: 'cat' };
const arr = ['foo', 'bar', 'baz', 'cat'];
const arrLength = arr.length;
const mySet = new Set(['foo', 'bar', { baz: 'cats' }]);
const myMap = new Map([['foo', 'bar'], ['baz', 'cats'], ['dogs', undefined]]);

fourLoop(obj, (value, key, iterator) => {
    // Do magic here
    if (iterator === 1) {
        console.log(value, key, iterator); // Prints cat, baz, 1
    }
});

fourLoop(arr, (value, key, iterator) => {
    // Do magic here
    if (iterator === 1) {
        console.log(value, key, iterator); // Prints bar, bar, 1
    }
});

fourLoop(arrLength, (value, key, iterator) => {
    // Do magic here
    if (iterator === 1) {
        console.log(value, key, iterator); // Prints 1, 1, 1
    }
});

fourLoop(mySet, (value, key, iterator) => {
    // Do magic here
    if (iterator === 1) {
        console.log(value, key, iterator); // Prints bar, bar, 1
    }
});

fourLoop(myMap, (value, key, iterator) => {
    // Do magic here
    if (iterator === 1) {
        console.log(value, key, iterator); // Prints cats, baz, 1
    }
});

```