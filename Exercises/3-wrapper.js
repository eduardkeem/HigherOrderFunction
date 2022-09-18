'use strict';

/* Реализуйте функцию `contract(fn, ...types)` которая оборачивает `fn` (первый
аргумент) и проверяет типы аргументов (все аргументы кроме первого и последнего)
и результата (последний аргумент), генерируя исключение `TypeError`, если типы
не совпадают. Как в следующем примере:

```js
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5
```
and
```js
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world! */


const contract = (fn, ...types) => null;









module.exports = { contract };
