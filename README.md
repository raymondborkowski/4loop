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
## Developing and contributing to 4loop

### Folder structure

The main body of code is in `index.js`.

The tests are in the `test/spec` directory. Please follow naming convention with `xxxx.spec.js`

### Running tests

We use [Feather-test](https://www.npmjs.com/package/feather-test) which is similar to jasmine for unit tests. Unless there is a very compelling reason to use something different, please continue using Feather for tests. The existing tests are in the spec folder. Here are some useful command shortcuts:

#### Run all the tests:

`npm test`

#### Run only some tests:

`npm test --run=nameOfFile`

### Before submitting a pull request

Please make sure all code supports all versions of node.

We use ESLint for syntax consistency, and the linting rules are included in this repository. Running `npm test` will check the linting rules as well. Please make sure your code has no linting errors before submitting a pull request.

`eslint . --fix` will also automatically fix any linting errors.

## License

[MIT](https://github.com/raymondborkowski/4loop/blob/master/LICENSE)
