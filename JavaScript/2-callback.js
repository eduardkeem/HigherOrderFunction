'use strict';

const fn = (par, callback) => {
  if (!par) {                                       // Если нет par
    callback(new Error('Parameter needed'));
    return;
  }
  callback(null, `Data ${par}`);
  return 'Value';
};

const res = fn('example', (err, data) => {
  if (err) throw err;
  console.dir({ data });                 // { data: 'Data example' }  // Вызов в фигурных скобках
});

console.dir({ res });                   // { res: 'Value' }      
