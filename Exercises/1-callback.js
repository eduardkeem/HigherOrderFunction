'use strict';

/* Реализуйте функцию `iterate(object, callback)` которая будет итерировать
все ключи переданного объекта, вызывая для каждого `callback` со следующим
контрактом `callback(key, value, object)`. Например:

```js
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
```
Вывод:
```
{ key: 'a', value: 1 }
{ key: 'b', value: 2 }
{ key: 'c', value: 3 } */

const iterate = () => null;

// const obj = { a: 1, b: 2, c: 3 };

// const iterate = (obj, callback) => {
//   const keys = Object.keys(obj);        // Ключи объекта
//   for (const key of keys) {             // Цикл ключей из ключей
//     const value = obj[key];             // Значение ключей
//     callback(key, value, obj);
//   }
// };

module.exports = { iterate };
