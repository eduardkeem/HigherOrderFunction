'use strict';

/* Реализуйте функцию `store(value)` которая сохранит значение в замыкании
возвращаемой функции, а после ее вызова вернет значение из замыкания, как
в примере:

```js
const read = store(5);
const value = read();
console.log(value); // Output: 5 */

// const store = x => output => {
//   output = x;
//   return (`Output: ${output}`);
// };

const store = x => () => x;

module.exports = { store };
